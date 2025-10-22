const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const usersFile = path.join(__dirname, 'users.json');
const bookingsFile = path.join(__dirname, 'bookings.json');

// Helper functions
function readJsonFile(file) {
  try {
    const data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeJsonFile(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Register endpoint
app.post('/register', (req, res) => {
  const { email, password, role = 'user' } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  let users = readJsonFile(usersFile);
  if (users.some(u => u.email === email)) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  users.push({ email, password, role });
  writeJsonFile(usersFile, users);
  res.status(201).json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readJsonFile(usersFile);
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ message: 'Login successful', role: user.role });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Bookings endpoints
app.get('/bookings', (req, res) => {
  const bookings = readJsonFile(bookingsFile);
  res.json(bookings);
});

app.post('/bookings', (req, res) => {
  const newBooking = req.body;
  
  // Validate required fields
  const requiredFields = ['serviceType', 'bookingDate', 'bookingTime', 'area', 'streetAddress', 'postcode', 'fullName', 'phoneNumber'];
  for (let field of requiredFields) {
    if (!newBooking[field]) {
      return res.status(400).json({ error: `${field} is required` });
    }
  }
  
  // Handle hourly specific fields
  if (newBooking.serviceType === 'hourly_cleaning') {
    if (!newBooking.hours || isNaN(newBooking.hours)) {
      return res.status(400).json({ error: 'Hours required for hourly cleaning and must be a number' });
    }
    // Recalculate price to verify
    newBooking.estimatedPrice = 25 * parseInt(newBooking.hours);
  } else {
    if (!newBooking.homeSize) {
      return res.status(400).json({ error: 'Home size required for non-hourly services' });
    }
    // Note: Price recalculation for other services can be added here if needed
  }
  
  newBooking.id = Date.now().toString();
  newBooking.status = 'pending';
  
  let bookings = readJsonFile(bookingsFile);
  bookings.push(newBooking);
  writeJsonFile(bookingsFile, bookings);
  res.status(201).json({ message: 'Booking created' });
});

app.put('/bookings/:id', (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  
  if (!['accepted', 'completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Must be "accepted" or "completed"' });
  }
  
  let bookings = readJsonFile(bookingsFile);
  const bookingIndex = bookings.findIndex(b => b.id === id);
  
  if (bookingIndex === -1) {
    return res.status(404).json({ error: 'Booking not found' });
  }
  
  bookings[bookingIndex].status = status;
  writeJsonFile(bookingsFile, bookings);
  res.json({ message: 'Booking status updated successfully' });
});

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '.'), { etag: false, lastModified: false, maxAge: 0 }));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
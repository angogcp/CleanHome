const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const data = require('./api/_lib/data'); // Import data.js

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Initialize database
data.initDb().then(() => {
  console.log('Database initialized.');
}).catch(err => {
  console.error('Failed to initialize database:', err);
});

// Register endpoint
app.post('/register', async (req, res) => {
  const { email, password, role = 'user', name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Email, password, and name are required' });
  }

  const existingUser = await data.getUser(email);
  if (existingUser) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  const success = await data.registerUser({ email, name, password, role });
  if (success) {
    res.status(201).json({ message: 'User registered successfully' });
  } else {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await data.getUser(email);
  if (user && user.password === password) {
    res.json({ message: 'Login successful', role: user.role });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Bookings endpoints
app.get('/bookings', async (req, res) => {
  const bookings = await data.listBookings();
  res.json(bookings);
});

app.post('/bookings', async (req, res) => {
  const newBooking = req.body;
  const requiredFields = ['serviceType', 'bookingDate', 'bookingTime', 'area', 'streetAddress', 'postcode', 'fullName', 'phoneNumber'];
  for (let field of requiredFields) {
    if (!newBooking[field]) {
      return res.status(400).json({ error: `${field} is required` });
    }
  }

  newBooking.id = Date.now().toString();
  newBooking.status = 'pending';
  newBooking.name = newBooking.fullName;
  newBooking.email = newBooking.email || ''; // Ensure email is present
  newBooking.address = `${newBooking.streetAddress}, ${newBooking.area}, ${newBooking.postcode}`;
  newBooking.service = newBooking.serviceType;
  newBooking.date = newBooking.bookingDate;
  newBooking.time = newBooking.bookingTime;

  const success = await data.addBooking(newBooking);
  if (success) {
    res.status(201).json({ message: 'Booking created' });
  } else {
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

app.put('/bookings/:id', async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  if (!['accepted', 'completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  const success = await data.updateBookingStatus(id, status);
  if (success) {
    res.json({ message: 'Booking status updated' });
  } else {
    res.status(404).json({ error: 'Booking not found' });
  }
});

// Serve index.html for the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
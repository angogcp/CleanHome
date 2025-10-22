const storage = require('./storage');
const neonDb = require('./neon');

// Check if Neon is available
function hasNeon() {
  return neonDb.initNeon();
}

// Initialize tables if needed
async function initDb() {
  if (hasNeon()) {
    return await neonDb.initTables();
  }
  return false;
}

// Users
async function getUser(email) {
  if (hasNeon()) {
    const user = await neonDb.getUser(email);
    if (user) return user;
  }
  
  // Fallback to local storage
  const users = storage.readData('users.json');
  return users.find(u => u.email === email) || null;
}

async function registerUser(user) {
  if (hasNeon()) {
    return await neonDb.registerUser(user);
  }
  
  // Fallback to local storage
  const users = storage.readData('users.json');
  users.push(user);
  storage.writeData('users.json', users);
  return true;
}

// Bookings
async function listBookings() {
  if (hasNeon()) {
    return await neonDb.listBookings();
  }
  
  // Fallback to local storage
  return storage.readData('bookings.json');
}

async function addBooking(booking) {
  if (hasNeon()) {
    return await neonDb.addBooking(booking);
  }
  
  // Fallback to local storage
  const bookings = storage.readData('bookings.json');
  bookings.push(booking);
  storage.writeData('bookings.json', bookings);
  return true;
}

async function updateBookingStatus(id, status) {
  if (hasNeon()) {
    return await neonDb.updateBookingStatus(id, status);
  }
  
  // Fallback to local storage
  const bookings = storage.readData('bookings.json');
  const idx = bookings.findIndex(b => b.id === id);
  if (idx === -1) return false;
  bookings[idx].status = status;
  storage.writeData('bookings.json', bookings);
  return true;
}

module.exports = {
  hasNeon,
  initDb,
  getUser,
  registerUser,
  listBookings,
  addBooking,
  updateBookingStatus,
};
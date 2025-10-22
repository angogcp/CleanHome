let kvClient = null;
try {
  const { kv } = require('@vercel/kv');
  kvClient = kv;
} catch (_) {
  kvClient = null;
}

const storage = require('./storage');

function hasKv() {
  return Boolean(
    kvClient &&
    (process.env.KV_REST_API_URL || process.env.KV_URL) &&
    (process.env.KV_REST_API_TOKEN || process.env.KV_REST_API_READ_ONLY_TOKEN)
  );
}

// Users
async function getUser(email) {
  if (hasKv()) {
    const fromKv = await kvClient.hget('users', email);
    if (fromKv) return fromKv;
    // Seed from storage if present
    const fallback = storage.readData('users.json').find(u => u.email === email) || null;
    if (fallback) {
      await kvClient.hset('users', { [email]: fallback });
    }
    return fallback;
  }
  const users = storage.readData('users.json');
  return users.find(u => u.email === email) || null;
}

async function registerUser(user) {
  if (hasKv()) {
    await kvClient.hset('users', { [user.email]: user });
    return true;
  }
  const users = storage.readData('users.json');
  users.push(user);
  storage.writeData('users.json', users);
  return true;
}

// Bookings
async function listBookings() {
  if (hasKv()) {
    const hash = await kvClient.hgetall('bookings');
    if (hash && Object.keys(hash).length > 0) {
      return Object.values(hash);
    }
    // Seed from storage if KV is empty
    const fallback = storage.readData('bookings.json');
    if (fallback.length > 0) {
      const toSet = {};
      fallback.forEach(b => { toSet[b.id] = b; });
      await kvClient.hset('bookings', toSet);
    }
    return fallback;
  }
  return storage.readData('bookings.json');
}

async function addBooking(booking) {
  if (hasKv()) {
    await kvClient.hset('bookings', { [booking.id]: booking });
    return true;
  }
  const bookings = storage.readData('bookings.json');
  bookings.push(booking);
  storage.writeData('bookings.json', bookings);
  return true;
}

async function updateBookingStatus(id, status) {
  if (hasKv()) {
    const booking = await kvClient.hget('bookings', id);
    if (!booking) return false;
    booking.status = status;
    await kvClient.hset('bookings', { [id]: booking });
    return true;
  }
  const bookings = storage.readData('bookings.json');
  const idx = bookings.findIndex(b => b.id === id);
  if (idx === -1) return false;
  bookings[idx].status = status;
  storage.writeData('bookings.json', bookings);
  return true;
}

module.exports = {
  hasKv,
  getUser,
  registerUser,
  listBookings,
  addBooking,
  updateBookingStatus,
};
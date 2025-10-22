const storage = require('./_lib/storage');
const { hasKv } = require('./_lib/data');

let kvClient = null;
try {
  const { kv } = require('@vercel/kv');
  kvClient = kv;
} catch (_) {
  kvClient = null;
}

function getToken(req) {
  const fromQuery = req.query && (req.query.token || req.query.auth);
  const fromHeader = req.headers && req.headers.authorization;
  if (fromHeader && fromHeader.startsWith('Bearer ')) {
    return fromHeader.slice('Bearer '.length);
  }
  return fromQuery || null;
}

module.exports = async (req, res) => {
  try {
    // Only allow POST to avoid accidental triggering
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
    }

    const token = getToken(req);
    const expected = process.env.SEED_TOKEN || 'devseed';
    if (!token || token !== expected) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!hasKv() || !kvClient) {
      return res.status(200).json({
        message: 'KV not configured. Running in local JSON mode, nothing to seed.',
        usersSeeded: 0,
        bookingsSeeded: 0,
      });
    }

    const existingUsers = await kvClient.hgetall('users');
    const existingBookings = await kvClient.hgetall('bookings');

    const users = storage.readData('users.json');
    const bookings = storage.readData('bookings.json');

    const usersToSet = {};
    (users || []).forEach(u => {
      const key = u.email;
      if (!existingUsers || !existingUsers[key]) {
        usersToSet[key] = u;
      }
    });

    const bookingsToSet = {};
    (bookings || []).forEach(b => {
      const key = b.id;
      if (!existingBookings || !existingBookings[key]) {
        bookingsToSet[key] = b;
      }
    });

    if (Object.keys(usersToSet).length > 0) {
      await kvClient.hset('users', usersToSet);
    }
    if (Object.keys(bookingsToSet).length > 0) {
      await kvClient.hset('bookings', bookingsToSet);
    }

    return res.status(200).json({
      message: 'Seed complete',
      usersSeeded: Object.keys(usersToSet).length,
      bookingsSeeded: Object.keys(bookingsToSet).length,
    });
  } catch (err) {
    console.error('Seed error', err);
    return res.status(500).json({ error: 'Internal Server Error', detail: String(err && err.message || err) });
  }
};
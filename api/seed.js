const storage = require('./_lib/storage');
const { hasNeon, initDb, registerUser, addBooking } = require('./_lib/data');

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

    if (!hasNeon()) {
      return res.status(200).json({
        message: 'Neon database not configured. Running in local JSON mode, nothing to seed.',
        usersSeeded: 0,
        bookingsSeeded: 0,
      });
    }

    // Initialize database tables
    const initialized = await initDb();
    if (!initialized) {
      return res.status(500).json({ error: 'Failed to initialize database tables' });
    }

    const users = storage.readData('users.json');
    const bookings = storage.readData('bookings.json');

    let usersSeeded = 0;
    let bookingsSeeded = 0;

    // Seed users
    for (const user of users) {
      try {
        await registerUser(user);
        usersSeeded++;
      } catch (error) {
        console.error(`Failed to seed user ${user.email}:`, error);
      }
    }

    // Seed bookings
    for (const booking of bookings) {
      try {
        await addBooking(booking);
        bookingsSeeded++;
      } catch (error) {
        console.error(`Failed to seed booking ${booking.id}:`, error);
      }
    }

    return res.status(200).json({
      message: 'Seed complete',
      usersSeeded,
      bookingsSeeded,
    });
  } catch (err) {
    console.error('Seed error', err);
    return res.status(500).json({ error: 'Internal Server Error', detail: String(err && err.message || err) });
  }
};
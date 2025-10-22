const { updateBookingStatus } = require('../_lib/data');

module.exports = async (req, res) => {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query || {};
  const body = req.body || {};
  const { status } = body;

  if (!['accepted', 'completed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Must be "accepted" or "completed"' });
  }

  const ok = await updateBookingStatus(id, status);
  if (!ok) {
    return res.status(404).json({ error: 'Booking not found' });
  }
  return res.status(200).json({ message: 'Booking status updated successfully' });
};
const { listBookings, addBooking } = require('./_lib/data');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const bookings = await listBookings();
    return res.status(200).json(bookings);
  }

  if (req.method === 'POST') {
    const newBooking = req.body || {};
    const requiredFields = ['serviceType', 'bookingDate', 'bookingTime', 'area', 'streetAddress', 'postcode', 'fullName', 'phoneNumber'];
    for (let field of requiredFields) {
      if (!newBooking[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    if (newBooking.serviceType === 'hourly_cleaning') {
      if (!newBooking.hours || isNaN(newBooking.hours)) {
        return res.status(400).json({ error: 'Hours required for hourly cleaning and must be a number' });
      }
      newBooking.estimatedPrice = 25 * parseInt(newBooking.hours);
    } else {
      if (!newBooking.homeSize) {
        return res.status(400).json({ error: 'Home size required for non-hourly services' });
      }
    }

    newBooking.id = Date.now().toString();
    newBooking.status = 'pending';

    await addBooking(newBooking);
    return res.status(201).json({ message: 'Booking created' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
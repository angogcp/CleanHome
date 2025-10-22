const { getUser, registerUser } = require('./_lib/data');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const body = req.body || {};
  const { email, password, role = 'user' } = body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const existing = await getUser(email);
  if (existing) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  await registerUser({ email, password, role });
  return res.status(201).json({ message: 'User registered successfully' });
};
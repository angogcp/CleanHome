const { getUser } = require('./_lib/data');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const body = req.body || {};
  const { email, password } = body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const user = await getUser(email);
  if (user && user.password === password) {
    return res.status(200).json({ message: 'Login successful', role: user.role });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
};
const { neon } = require('@neondatabase/serverless');
const { Pool } = require('pg');

// Initialize Neon client
let sql;
let pool;

function initNeon() {
  if (!process.env.NEON_DATABASE_URL) {
    return false;
  }
  
  try {
    sql = neon(process.env.NEON_DATABASE_URL);
    pool = new Pool({
      connectionString: process.env.NEON_DATABASE_URL,
    });
    return true;
  } catch (error) {
    console.error('Failed to initialize Neon:', error);
    return false;
  }
}

// Initialize database tables
async function initTables() {
  if (!sql) return false;
  
  try {
    // Create users table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        email TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL
      )
    `;
    
    // Create bookings table
    await sql`
      CREATE TABLE IF NOT EXISTS bookings (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        service TEXT NOT NULL,
        date TEXT NOT NULL,
        time TEXT NOT NULL,
        status TEXT NOT NULL,
        notes TEXT
      )
    `;
    
    return true;
  } catch (error) {
    console.error('Failed to initialize tables:', error);
    return false;
  }
}

// User operations
async function getUser(email) {
  if (!sql) return null;
  
  try {
    const users = await sql`SELECT * FROM users WHERE email = ${email}`;
    return users.length > 0 ? users[0] : null;
  } catch (error) {
    console.error('Failed to get user:', error);
    return null;
  }
}

async function registerUser(user) {
  if (!sql) return false;
  
  try {
    await sql`
      INSERT INTO users (email, name, password, role)
      VALUES (${user.email}, ${user.name}, ${user.password}, ${user.role})
    `;
    return true;
  } catch (error) {
    console.error('Failed to register user:', error);
    return false;
  }
}

// Booking operations
async function listBookings() {
  if (!sql) return [];
  
  try {
    return await sql`SELECT * FROM bookings ORDER BY date DESC`;
  } catch (error) {
    console.error('Failed to list bookings:', error);
    return [];
  }
}

async function addBooking(booking) {
  if (!sql) return false;
  
  try {
    await sql`
      INSERT INTO bookings (id, name, email, phone, address, service, date, time, status, notes)
      VALUES (
        ${booking.id}, ${booking.name}, ${booking.email}, ${booking.phone}, 
        ${booking.address}, ${booking.service}, ${booking.date}, ${booking.time}, 
        ${booking.status}, ${booking.notes || ''}
      )
    `;
    return true;
  } catch (error) {
    console.error('Failed to add booking:', error);
    return false;
  }
}

async function updateBookingStatus(id, status) {
  if (!sql) return false;
  
  try {
    const result = await sql`
      UPDATE bookings 
      SET status = ${status}
      WHERE id = ${id}
    `;
    return result.count > 0;
  } catch (error) {
    console.error('Failed to update booking status:', error);
    return false;
  }
}

module.exports = {
  initNeon,
  initTables,
  getUser,
  registerUser,
  listBookings,
  addBooking,
  updateBookingStatus
};
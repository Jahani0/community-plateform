const db = require('../config/db');

const findUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

const createUser = async ({ name, email, password }) => {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, NOW())",
    [name, email, password]
  );
  return result.insertId;
};

module.exports = {
  findUserByEmail,
  createUser
};




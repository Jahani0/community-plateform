const db = require('../config/db');

const getAllContacts = async () => {
  const [rows] = await db.execute('SELECT * FROM emergency_contacts ORDER BY category, main_area');
  return rows;
};

const getContactsByCategory = async (category) => {
  const [rows] = await db.execute(
    'SELECT * FROM emergency_contacts WHERE category = ? ORDER BY main_area ASC',
    [category]
  );
  return rows;
};

const searchContactsByArea = async (searchTerm) => {
  const like = `%${searchTerm}%`;
  const [rows] = await db.execute(
    `SELECT * FROM emergency_contacts WHERE main_area LIKE ? OR city LIKE ? ORDER BY category, main_area ASC`,
    [like, like]
  );
  return rows;
};

module.exports = {
  getAllContacts,
  getContactsByCategory,
  searchContactsByArea,
};

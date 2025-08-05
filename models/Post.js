const db = require('../config/db');

const createPost = async (postData) => {
  const sql = ` 
    INSERT INTO posts (type, title, description, category, priority, location, contact_info, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    postData.type,
    postData.title,
    postData.description,
    postData.category,
    postData.priority,
    postData.location,
    postData.contact_info,
    postData.status || 'active',
  ];

  const [result] = await db.execute(sql, values);
  return result.insertId;
};

module.exports = {
  createPost,
};

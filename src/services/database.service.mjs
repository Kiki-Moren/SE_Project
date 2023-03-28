import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'world',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const databaseService = {
  async getCities() {
    const [rows] = await pool.query('SELECT * FROM city ORDER BY Name');
    return rows;
  },

  async getCity(id) {
    const [rows] = await pool.query('SELECT * FROM city WHERE ID = ?', [id]);
    return rows[0];
  },

  async getCityGallery(id) {
    const [rows] = await pool.query('SELECT * FROM city_gallery WHERE CityID = ?', [id]);
    return rows;
  }
};

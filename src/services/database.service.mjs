import sqlite3 from 'sqlite3';
import fs from 'fs';

const db = new sqlite3.Database(':memory:');
const sql = fs.readFileSync('./Pop_database/world.sql').toString();
db.exec(sql);

function getAllCities(req, res) {
  const query = 'SELECT * FROM city';

  db.all(query, [], (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }

    res.render('cities', { cities: rows });
  });
}

export { getAllCities };

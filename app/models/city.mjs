const databaseService = require('../services/databaseService');

async function getAllCities() {
  const query = 'SELECT * FROM city';
  const result = await databaseService.executeQuery(query);
  return result.rows;
}

async function getCityById(id) {
  const query = 'SELECT * FROM city WHERE id=$1';
  const result = await databaseService.executeQuery(query, [id]);
  return result.rows[0];
}

module.exports = {
  getAllCities,
  getCityById
};

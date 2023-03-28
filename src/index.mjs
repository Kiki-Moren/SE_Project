const express = require('express');
const path = require('path');
const databaseService = require('./services/databaseService');
const cityModel = require('./models/city');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', async (req, res) => {
  const cities = await cityModel.getAllCities();
  res.render('index', { cities });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/cities/:id', async (req, res) => {
  const city = await cityModel.getCityById(req.params.id);
  res.render('city', { city });
});

app.get('/cities', async (req, res) => {
  const cities = await cityModel.getAllCities();
  res.render('cities', { cities });
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.listen(port, async () => {
  await databaseService.connect();
  console.log(`Server listening at http://localhost:${port}`);
});

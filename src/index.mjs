import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { databaseService } from './services/database.service.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', async (req, res) => {
  try {
    const cities = await databaseService.getCities();
    res.render('index', { cities });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.get('/cities/:id', async (req, res) => {
  try {
    const cityId = parseInt(req.params.id);
    const city = await databaseService.getCity(cityId);
    const gallery = await databaseService.getCityGallery(cityId);
    res.render('city', { city, gallery });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

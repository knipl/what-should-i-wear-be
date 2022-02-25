import { Express, Router } from 'express';
import { getWeather } from '../controllers/weatherController';

const weatherRoutes = Router();

weatherRoutes.get('/', getWeather);

export default weatherRoutes;

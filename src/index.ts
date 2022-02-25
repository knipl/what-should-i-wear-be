import dotenv from 'dotenv';
import Express from 'express';
import userRoutes from './routes/userRoutes';
import weatherRoutes from './routes/weatherRoutes';

dotenv.config();

const port = process.env.SERVER_PORT;
const app = Express();

app.use('/users', userRoutes);
app.use('/weather', weatherRoutes);

app.get('/', (_req: Express.Request, res: Express.Response) => {
  res.status(200).json({ foo: 'bar', Time: new Date().toISOString() });
});
app.use((_req: Express.Request, res: Express.Response) => {
  res.status(404).send('Not found');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

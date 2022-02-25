import axios from 'axios';
import { Request, Response } from 'express';

export const getWeather = (req: Request, res: Response) => {
  axios
    .get(
      'https://api.openweathermap.org/data/2.5/onecall?lat=47.497913&lon=19.040236&exclude=minutely,hourly,alerts&units=metric&appid=c9617ba4456ebfd721b330336f9a5968',
    )
    .then(response => {
      if (response.data.current.temp > 10) {
        res.status(200).send('átmeneti kabát, pulcsi, hosszúnadrág');
      } else if (response.data.current.temp < 0) {
        res
          .status(200)
          .send({ message: 'kutya hideg van, maradj otthon', temp: response.data.current.temp });
      } else {
        res
          .status(200)
          .send({ message: 'télikabát, jager-alsó', temp: response.data.current.temp });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
};

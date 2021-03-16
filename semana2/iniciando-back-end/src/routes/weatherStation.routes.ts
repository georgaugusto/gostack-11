import { Router } from 'express';
import database from '../database/firebase';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

interface WeatherStation {
  BH1750_Luminosidade: number;
  BMP280_Altitude: number;
  BMP280_Pressao: number;
  CSMSV12_Solo: number;
  DHT22_Temperatura: number;
  DHT22_Umidade: number;
  Pluviometro: number;
  UVM30A_IndiceUv: number;
  timestamp: Date;
}

const wetherStationDataRouter = Router();

wetherStationDataRouter.use(ensureAuthenticated);

wetherStationDataRouter.get('/', (request, response) => {
  const RefR = database.ref('Prototipo0/Leitura/');

  RefR.limitToLast(1).on('value', snapshot => {
    snapshot.forEach(child => {
      const dataHora = child.key;

      const Ref = database.ref(`Prototipo0/Leitura/${dataHora}`);

      Ref.limitToLast(1).on('value', snapshot => {
        snapshot.forEach(childSnapshot => {
          const lastMeasurements = childSnapshot;

          const weatherStation: WeatherStation = JSON.parse(
            JSON.stringify(lastMeasurements),
          );

          return response.json(weatherStation);
        });
      });
    });
  });
});

export default wetherStationDataRouter;

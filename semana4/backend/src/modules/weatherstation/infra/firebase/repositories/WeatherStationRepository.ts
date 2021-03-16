import database from '@shared/infra/firebase/index';

import IWeatherStationRepository from '@modules/weatherstation/repositories/IWeatherStationRepository';

import WeatherStation from '@modules/weatherstation/infra/firebase/entities/WeatherStation';

class WetherStationRepository implements IWeatherStationRepository {
  public async findLatestWeatherStationRecord(): Promise<
    WeatherStation | undefined
  > {
    let latestWeatherStationRecord: WeatherStation | undefined;

    const Ref = database.ref('Prototipo0/Leitura/');
    const snapshot = await Ref.limitToLast(1).once('value');

    snapshot.forEach(child => {
      child.forEach(childSnapshot => {
        latestWeatherStationRecord = childSnapshot.val();
      });
    });

    return latestWeatherStationRecord;
  }

  public async findAverageWeatherStationRecord(
    date: string,
  ): Promise<WeatherStation | undefined> {
    let latestAverageWeatherStationRecord: WeatherStation | undefined;

    const Ref = database.ref(`Prototipo0/Media/${date}`);
    const snapshot = await Ref.limitToLast(1).once('value');

    snapshot.forEach(child => {
      latestAverageWeatherStationRecord = child.val();
    });

    return latestAverageWeatherStationRecord;
  }

  public async findMaxWeatherStationRecord(
    date: string,
    sensor: string,
  ): Promise<WeatherStation | undefined> {
    let maxWeatherStationRecord: WeatherStation | undefined;

    const Ref = database.ref(`Prototipo0/Leitura/${date}`);
    const snapshot = await Ref.limitToLast(1)
      .orderByChild(`${sensor}`)
      .once('value');

    snapshot.forEach(child => {
      maxWeatherStationRecord = child.val();
    });

    return maxWeatherStationRecord;
  }

  public async findMinWeatherStationRecord(
    date: string,
    sensor: string,
  ): Promise<WeatherStation | undefined> {
    let maxWeatherStationRecord: WeatherStation | undefined;

    const Ref = database.ref(`Prototipo0/Leitura/${date}`);
    const snapshot = await Ref.limitToFirst(1)
      .orderByChild(`${sensor}`)
      .once('value');

    snapshot.forEach(child => {
      maxWeatherStationRecord = child.val();
    });

    return maxWeatherStationRecord;
  }
}

export default WetherStationRepository;

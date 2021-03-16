import WeatherStation from '@modules/weatherstation/infra/firebase/entities/WeatherStation';
import IFindLatestWeatherStationRecordDTO from '../dtos/IFindLatestWeatherStationRecordDTO';

export default interface IWeatherStationRepository {
  findLatestWeatherStationRecord(
    data?: IFindLatestWeatherStationRecordDTO,
  ): Promise<WeatherStation | undefined>;
  findAverageWeatherStationRecord(
    date: string,
  ): Promise<WeatherStation | undefined>;
  findMaxWeatherStationRecord(
    date: string,
    sensor: string,
  ): Promise<WeatherStation | undefined>;
  findMinWeatherStationRecord(
    date: string,
    sensor: string,
  ): Promise<WeatherStation | undefined>;
}

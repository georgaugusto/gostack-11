import IWeatherStationRepository from '@modules/weatherstation/repositories/IWeatherStationRepository';
import { injectable, inject } from 'tsyringe';
import WeatherStation from '@modules/weatherstation/infra/firebase/entities/WeatherStation';

interface IRequest {
  date: string;
  sensor: string;
}

@injectable()
class ListMaxWeatherStationRecordService {
  constructor(
    @inject('WeatherStationRepository')
    private weatherStationRepository: IWeatherStationRepository,
  ) {}

  public async execute({
    date,
    sensor,
  }: IRequest): Promise<WeatherStation | undefined> {
    const weatherstation = await this.weatherStationRepository.findMaxWeatherStationRecord(
      date,
      sensor,
    );

    return weatherstation;
  }
}

export default ListMaxWeatherStationRecordService;

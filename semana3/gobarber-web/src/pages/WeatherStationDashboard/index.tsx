import React, { useEffect, useState } from 'react';
import 'react-day-picker/lib/style.css';

import {
  FiChevronDown,
  FiWind,
  FiSun,
  FiHome,
  FiThermometer,
  FiDroplet,
  FiFeather,
  FiCloudDrizzle,
  FiArrowDownCircle,
  FiTrendingUp,
  FiCloud,
  FiLogOut,
} from 'react-icons/fi';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  SectionZero,
  SectionOne,
  WeatherInformation,
  WeatherAlerts,
  SectionTwo,
  WeatherStationContent,
  GridContent,
  AnemometerData,
  BrightnessData,
  AltitudeDate,
  PressureData,
  SoilData,
  TemperatureData,
  MoistureData,
  ThermalSensationData,
  PluviometerData,
  UvIndexData,
  WettingData,
  LastWeatherReading,
} from './styles';

// import logoImg from '../../assets/logo.svg';
import weatherInformationImg from '../../assets/weatherInformationImg.svg';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface WeatherStationItem {
  anemometro: number;
  bh1750Luminosidade: number;
  bmp280Altitude: number;
  bmp280Pressao: number;
  csmsv12Solo: number;
  dht22Temperatura: number;
  dht22Umidade: number;
  mhrdMolhamento: number;
  pluviometro: number;
  uvm30aIndiceUv: number;
  timestamp: Date;
}

const WeatherStationDashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const [currentWeatherStation, setWeatherStation] = useState<
    WeatherStationItem
  >();

  // const [currentMaxWeatherStation, setMaxWeatherStation] = useState<
  //   WeatherStationItem
  // >();

  useEffect(() => {
    api.get(`/weatherstation`).then((response) => {
      setWeatherStation(response.data);
    });
  }, [setWeatherStation]);

  // useEffect(() => {
  //   api
  //     .get(`/weatherstation/max`, {
  //       params: {
  //         date: '2020-08-25',
  //         sensor: 'dht22Temperatura',
  //       },
  //     })
  //     .then((response) => {
  //       setMaxWeatherStation(response.data);
  //     });
  // }, [setMaxWeatherStation]);

  let teste: number;

  teste =
    33 +
    (10 * Math.sqrt(currentWeatherStation?.anemometro || 0) +
      (10.45 - currentWeatherStation?.anemometro! || 0)) *
      ((currentWeatherStation?.dht22Temperatura! - 33) / 22);

  return (
    <Container>
      <Header>
        <HeaderContent>
          {/* <img src={logoImg} alt="GoBarber" /> */}
          <strong>Sol ou Chuva</strong>

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiChevronDown />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <SectionZero>
          <button type="button" onClick={signOut}>
            <FiHome />
          </button>
          <button type="button" onClick={signOut}>
            <FiLogOut />
          </button>
        </SectionZero>

        <SectionOne>
          <WeatherInformation>
            <div>
              <strong>Ol??, {user.name.split(' ')[0]}!</strong>
              <span>
                Bem-vindo ao aplicativo! A qualidade do ar ?? boa e fresca, voc??
                pode sair hoje sem preocupa????es, mas n??o se esque??a do protetor
                solar.
              </span>
              <div>
                <FiCloud />
                <p>Tempo ensolarado com algumas nuvens</p>
              </div>
            </div>
            <img src={weatherInformationImg} alt="GoBarber" />
          </WeatherInformation>

          <WeatherAlerts>
            <strong>Cultura</strong>
            <div>
              <strong>Alertas da Soja!</strong>
              <div>
                <strong>Mancha parda!</strong>
                <p>
                  A infec????o e o desenvolvimento da doen??a s??o favorecidos por
                  condi????es quentes e ??midas iguais as ocorridas recentimente.
                  Sendo essas um per??odo m??nimo de molhamento de 6 horas e
                  temperaturas entre 15 ?? C e 30 ?? C para desenvolver sintomas.
                </p>
                <strong>Saiba mais</strong>
              </div>
              <div>
                <strong>Ferrugem asiatica!</strong>
                <p>
                  Temperaturas e per??odo m??nimo de molhamento foliar est??o
                  favorecendo o desenvolvimento da ferrugem, sende este per??odo
                  de molhamento foliar superior a 6 horas e temperaturas entre
                  20?? - 25??C.
                </p>
                <strong>Saiba mais</strong>
              </div>
            </div>
          </WeatherAlerts>
        </SectionOne>

        <SectionTwo>
          <strong>Esta????o Meteorol??gica</strong>
          <WeatherStationContent>
            <GridContent>
              <TemperatureData>
                <div>
                  <FiThermometer />
                  <span>{currentWeatherStation?.dht22Temperatura}??C</span>
                </div>
                <span>Temperatura</span>
              </TemperatureData>
              <MoistureData>
                <div>
                  <FiDroplet />
                  <span>{currentWeatherStation?.dht22Umidade}%</span>
                </div>
                <span>Umidade do Ar</span>
              </MoistureData>
            </GridContent>
            <GridContent>
              <ThermalSensationData>
                <div>
                  <FiThermometer />
                  <span>{teste.toFixed(2)}??C</span>
                </div>
                <span>Sensa????o T??rmica</span>
              </ThermalSensationData>
              <SoilData>
                <div>
                  <FiDroplet />
                  <span>{currentWeatherStation?.csmsv12Solo}%</span>
                </div>
                <span>Umidade do Solo</span>
              </SoilData>
            </GridContent>
            <GridContent>
              <PluviometerData>
                <div>
                  <FiCloudDrizzle />
                  <span>{currentWeatherStation?.pluviometro}mm</span>
                </div>
                <span>??ndice Pluviom??trico</span>
              </PluviometerData>
              <WettingData>
                <div>
                  <FiFeather />
                  <span>{currentWeatherStation?.mhrdMolhamento}%</span>
                </div>
                <span>Molhamento Foliar</span>
              </WettingData>
            </GridContent>
            <GridContent>
              <BrightnessData>
                <div>
                  <FiSun />
                  <span>{currentWeatherStation?.bh1750Luminosidade}Lux</span>
                </div>
                <span>Luminosidade</span>
              </BrightnessData>
              <UvIndexData>
                <div>
                  <FiSun />
                  <span>{currentWeatherStation?.uvm30aIndiceUv}Uv</span>
                </div>
                <span>??ndice Ultravioleta</span>
              </UvIndexData>
            </GridContent>
            <GridContent>
              <PressureData>
                <div>
                  <FiArrowDownCircle />
                  <span>{currentWeatherStation?.bmp280Pressao}hpa</span>
                </div>
                <span>Press??o Atmosf??rica</span>
              </PressureData>
              <AnemometerData>
                <div>
                  <FiWind />
                  <span>{currentWeatherStation?.anemometro}Km/h</span>
                </div>
                <span>Velocidade do Vento</span>
              </AnemometerData>
            </GridContent>
            <GridContent>
              <AltitudeDate>
                <div>
                  <FiTrendingUp />
                  <span>{currentWeatherStation?.bmp280Altitude}m</span>
                </div>
                <span>Altitude</span>
              </AltitudeDate>
            </GridContent>
            <LastWeatherReading>
              <div>
                <strong>??ltima Leitura</strong>
                {/* <p>{currentWeatherStation?.timestamp}</p> */}
                <p>
                  {Intl.DateTimeFormat('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  }).format(currentWeatherStation?.timestamp)}
                </p>
              </div>
            </LastWeatherReading>
          </WeatherStationContent>
        </SectionTwo>
      </Content>
    </Container>
  );
};

export default WeatherStationDashboard;

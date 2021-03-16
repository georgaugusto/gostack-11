import styled from 'styled-components';

const teste = `
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 205px;
  height: 110px;

  color: #FFFFFF;
  background: #9F9394;
  border-radius: 22px;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    font-style: normal;
    font-weight: nomal;
    font-size: 24px;
    line-height: 18px;

    svg {
      color: #FFFFFF;
      width: 25px;
      height: 25px;
    }
  }

  > span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
  }
`;

export const Container = styled.div`
  background-color: #f9f9f9;
`;

export const Header = styled.header`
  padding: 32px 0;
  background: #f9f9f9;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* > img {
    height: 40px;
    margin-right: auto;
  } */

  > strong {
    margin-right: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    letter-spacing: 0.694286px;

    color: #242424;
  }

  button {
    margin-left: 0;
    background: transparent;
    border: 0;

    svg {
      color: #242424;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 28px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #242424;
    }

    strong {
      color: #242424;
    }
  }
`;

export const Content = styled.main`
  max-width: 100%;
  margin-left: 42px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SectionZero = styled.section`
  display: flex;
  /* flex-grow: unset; */
  margin-right: 60px;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  width: 64px;
  height: 700px;

  background: #b0c6a1;
  border-radius: 50px;

  button {
    padding: 5px;
    background: transparent;
    border: 0;
    background: #ffffff;
    border-radius: 50px;

    svg {
      color: #b0c6a1;
      width: 20px;
      height: 20px;
    }
  }
`;

export const SectionOne = styled.section`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  margin-right: 40px;
  margin-left: 120px;
`;

export const WeatherInformation = styled.div`
  display: flex;
  flex-direction: row;
  /* max-height: 203px; */

  background: #ffecc8;
  border-radius: 28px;

  /* overflow:hidden; */

  img {
    /* overflow:hidden; */
    /* max-height: 203px; */
    /* height: 100%; */
    /* width: 100%; */
    border-radius: 0px 28px 28px 0px;
    /* background-color: pink; */
    margin-top: auto;

    display: flex;
    /* position: -webkit-sticky; */
    /* align-items: baseline; */
    /* flex-direction: row; */
    /* justify-content: baseline; */
  }

  > div {
    display: flex;

    /* align-items: left; */
    flex-direction: column;
    justify-content: space-around;

    margin: 27px;

    strong {
      margin-bottom: 12px;
      font-style: normal;
      /* font-weight: bold; */
      font-size: 30px;
      line-height: 32px;
      color: #c45a01;
    }

    span {
      margin-bottom: 46px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      /* or 157% */
      letter-spacing: 0.598334px;
      color: #bd5600;
    }

    div {
      display: flex;
      flex-direction: row;

      svg {
        color: #242424;
      }

      p {
        margin-left: 9px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        /* identical to box height, or 129% */

        letter-spacing: 0.598334px;

        color: #242424;
      }
    }
  }
`;

export const WeatherAlerts = styled.div`
  margin-top: 56px;

  > strong {
    font-style: normal;
    font-size: 24px;
    line-height: 30px;

    letter-spacing: 1.02571px;

    color: #242424;
  }

  > div {
    margin-top: 24px;
    background: #ffffff;
    border: 1px solid #e6e5f2;
    box-sizing: border-box;
    border-radius: 28px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > strong {
      margin-top: 26px;
      margin-left: 30px;
    }

    /* position: absolute; */
    min-width: 743px;
    min-height: 446px;

    > div {
      background: #f7f7f7;
      border-radius: 28px;

      display: flex;
      flex-direction: column;
      justify-content: space-around;

      margin: 20px 30px 0px 30px;

      strong {
        margin-top: 15px;
        margin-left: 23px;

        font-style: normal;
        font-size: 16px;
        line-height: 32px;

        letter-spacing: 1.15714px;

        color: #5a5e69;
      }

      p {
        margin-left: 23px;
        margin-right: 23px;

        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 22px;

        text-align: justify;
        letter-spacing: 0.598334px;

        color: #5a5e69;
      }
    }
  }
`;

export const SectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background: #f5f5f5;
  border: 1px solid rgba(237, 237, 245, 0.602601);
  /* box-sizing: border-box; */
  border-radius: 30px 0px 0px 30px;

  > strong {
    margin-left: 30px;
    margin-top: 25px;
    font-style: normal;
    font-size: 18px;
    line-height: 30px;
    color: #242424;
  }
`;

export const WeatherStationContent = styled.div`
  margin: 30px 30px 0 30px;
`;

export const GridContent = styled.div`
  display: flex;
  /* align-items: center; */
  /* flex-direction: row; */
  justify-content: space-around;

  margin-bottom: 17px;
`;

export const TemperatureData = styled.div`
  ${teste};
  background: #bf746d !important;
  margin-right: 17px;
`;

export const MoistureData = styled.div`
  ${teste};
  background: #d19f89 !important;
`;

export const WettingData = styled.div`
  ${teste};
  background: #718b7d !important;
`;

export const ThermalSensationData = styled.div`
  ${teste};
  background: #7aa3ae !important;
  margin-right: 17px;
`;

export const SoilData = styled.div`
  ${teste};
  background: #8a8786 !important;
`;

export const PluviometerData = styled.div`
  ${teste};
  background: #859aa2 !important;
  margin-right: 17px;
`;

export const AnemometerData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 205px;
  height: 110px;

  color: #ffffff;
  background: #9f9394;
  border-radius: 22px;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;

    svg {
      color: #ffffff;
      width: 25px;
      height: 25px;
    }
  }

  > span {
    font-size: 16px;
    text-align: center;
  }
`;

export const BrightnessData = styled.div`
  ${teste};
  background: #d7c27a !important;
  margin-right: 17px;
`;

export const UvIndexData = styled.div`
  ${teste};
  background: #a19583 !important;
`;

export const PressureData = styled.div`
  ${teste};
  background: #7fb2bb !important;
  margin-right: 17px;
`;

export const AltitudeDate = styled.div`
  ${teste};
  background: #947c95 !important;
`;

export const LastWeatherReading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-bottom: 5px;
  margin-right: 30px;

  strong {
    font-style: bold;
    font-size: 13px;
    color: #242424;
    text-align: center;
  }

  p {
    font-style: bold;
    font-size: 11px;
    color: #9897ad;
    text-align: center;
  }
`;

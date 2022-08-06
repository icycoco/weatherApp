import React from "react";
import {
  WiCloudy,
  WiDayCloudy,
  WiDayFog,
  WiDayRainMix,
  WiDayShowers,
  WiDaySleetStorm,
  WiDaySnow,
  WiDaySprinkle,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiFog,
  WiHail,
  WiRain,
  WiRaindrops,
  WiRainMix,
  WiRainWind,
  WiShowers,
  WiSnow,
  WiSnowflakeCold,
  WiSprinkle,
  WiStormShowers,
  WiThunderstorm,
} from "weather-icons-react";

export const getWeatherIcons = (weathercode: number) => {
  switch (weathercode) {
    case 0:
      return <WiDaySunny></WiDaySunny>;
    case 1:
      return <WiDaySunnyOvercast></WiDaySunnyOvercast>;
    case 2:
      return <WiDayCloudy></WiDayCloudy>;
    case 3:
      return <WiCloudy></WiCloudy>;
    case 45:
      return <WiDayFog></WiDayFog>;
    case 48:
      return <WiFog></WiFog>;
    case 51 || 53:
      return <WiDaySprinkle></WiDaySprinkle>;
    case 55:
      return <WiSprinkle></WiSprinkle>;
    case 56 || 57:
      return <WiHail></WiHail>;
    case 61:
      return <WiDayShowers></WiDayShowers>;
    case 63:
      return <WiShowers></WiShowers>;
    case 65:
      return <WiRaindrops></WiRaindrops>;
    case 66 || 67:
      return <WiRainMix></WiRainMix>;
    case 71 || 77:
      return <WiDaySnow></WiDaySnow>;
    case 73:
      return <WiSnow></WiSnow>;
    case 75:
      return <WiSnowflakeCold></WiSnowflakeCold>;
    case 80:
      return <WiDayRainMix></WiDayRainMix>;
    case 81:
      return <WiRain></WiRain>;
    case 82:
      return <WiRainWind></WiRainWind>;
    case 85 || 86:
      return <WiSnowflakeCold></WiSnowflakeCold>;
    case 95:
      return <WiDaySleetStorm></WiDaySleetStorm>;
    case 96:
      return <WiStormShowers></WiStormShowers>;
    case 99:
      return <WiThunderstorm></WiThunderstorm>;
    default:
      return <WiDaySunny></WiDaySunny>;
  }
};

export const WEATHER_DESC: any = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Drizzle",
  52: "Moderate Drizzle",
  53: "Dense Drizzle",
  56: "Light Hail",
  57: "Hail",
  61: "Slight Rain",
  63: "Rain",
  65: "Heavy Rain",
  66: "Light Hail",
  67: "Hail",
  71: "Light Snow",
  72: "Snow",
  73: "Heavy Snow",
  77: "Snow",
  80: "Rain Showers",
  81: "Rain Showers",
  82: "Rain Showers",
  85: "Snow Showers",
  86: "Heavy Snow Showers",
  95: "Thunderstorm",
  96: "Thunderstorm",
  99: "Thunderstorm",
};

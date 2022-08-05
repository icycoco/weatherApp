import React from "react";
import { getWeatherIcons, WEATHER_DESC } from "../weather";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const weatherCard = (dailyWeather, day) => {
  const dayOfWeek = () => {
    const time = dailyWeather.time[day];
    const d = new Date(time + "T12:00");
    return WEEKDAYS[d.getDay()];
  };

  const getWeatherIconclassName = () => {
    const weathercode = dailyWeather.weathercode[day];
    return getWeatherIcons(weathercode);
  };

  const getWeatherDescription = () => {
    const weathercode = dailyWeather.weathercode[day];
    return WEATHER_DESC[weathercode];
  };

  const avgTemperature = () => {
    return Math.round(
      (dailyWeather.temperature_2m_max[day] +
        dailyWeather.temperature_2m_min[day]) /
        2
    );
  };

  return (
    <div className="weathercard">
      {day === 0 ? (
        <div>
          <div className="dayoftheweek">Today</div>
          <span className="weatherIcon">{getWeatherIconclassName()}</span>
          <span className="todaysweather-rightside">
            <span className="temperature">{avgTemperature()}°</span>
            <span className="weatherdesc">{getWeatherDescription()}</span>
          </span>
        </div>
      ) : (
        <div>
          <div className="dayoftheweek">{dayOfWeek()}</div>
          <div className="weatherIcon">{getWeatherIconclassName()}</div>
          <div className="temperature">{avgTemperature()}°</div>
        </div>
      )}
    </div>
  );
};

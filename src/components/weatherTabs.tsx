import React, { useState, useEffect } from "react";
import { weatherCard } from "./weatherCard";
import { IWeatherData } from "../models/models";

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";
const TIMEZONE = "America%2FLos_Angeles";

const LOCATIONS = {
  OTTAWA: {
    name: "OTTAWA",
    latitude: "45.4235",
    longitude: "-75.6979",
  },
  MOSCOW: {
    name: "MOSCOW",
    latitude: "55.7558",
    longitude: "37.6176",
  },
  TOKYO: {
    name: "TOKYO",
    latitude: "35.6785",
    longitude: "139.6823",
  },
};

export const WeatherTabs = () => {
  const [location, setLocation] = useState(LOCATIONS.OTTAWA);
  const [weatherData, setWeatherData] = useState<IWeatherData>([] as any);
  useEffect(() => {
    fetch(
      `${WEATHER_API}?latitude=${location.latitude}&longitude=${location.longitude}&timezone=${TIMEZONE}&daily=weathercode,temperature_2m_min,temperature_2m_max&current_weather=true`
    )
      .catch((err) => {
        console.log("Error :", err);
      })
      .then((res: any) => res.json())
      .then((data: IWeatherData) => {
        setWeatherData(data);
      });
  }, [location]);

  return (
    <div id="wrapper">
      <div className="weatherTabs">
        <span
          className={
            location === LOCATIONS.OTTAWA ? "selected weatherTab" : "weatherTab"
          }
          onClick={() => setLocation(LOCATIONS.OTTAWA)}
        >
          {" "}
          OTTAWA
        </span>
        <span
          className={
            location === LOCATIONS.MOSCOW ? "selected weatherTab" : "weatherTab"
          }
          onClick={() => setLocation(LOCATIONS.MOSCOW)}
        >
          {" "}
          MOSCOW
        </span>
        <span
          className={
            location === LOCATIONS.TOKYO ? "selected weatherTab" : "weatherTab"
          }
          onClick={() => setLocation(LOCATIONS.TOKYO)}
        >
          {" "}
          TOKYO
        </span>
      </div>
      <div className="weathercards">
        <span className="today">
          {weatherData.daily ? weatherCard(weatherData.daily, 0) : ""}
        </span>
        <span className="forecast">
          {weatherData.daily ? weatherCard(weatherData.daily, 1) : ""}
          {weatherData.daily ? weatherCard(weatherData.daily, 2) : ""}
          {weatherData.daily ? weatherCard(weatherData.daily, 3) : ""}
          {weatherData.daily ? weatherCard(weatherData.daily, 4) : ""}
        </span>
      </div>
    </div>
  );
};

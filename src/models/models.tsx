export interface IWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    windspeed_10m: string;
  };
  daily: IDailyWeatherData;
}

export interface IDailyWeatherData {
  temperature_2m_min: number[];
  temperature_2m_max: number[];
  time: string[];
  weathercode: number[];
  relativehumidity_2m: number[];
  windspeed_10m: number[];
}

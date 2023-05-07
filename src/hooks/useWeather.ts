import React, { useState, useEffect } from "react";
import axios from "axios";
import { Location } from "../models/Location";
import { WeatherForecast } from "../models/WeatherForecast";

export default function useWeather(city: string) {
  const [info, setInfo] = React.useState({
    city: "",
    temp: 0,
    icon: "",
    humidity: 0,
    windspeed: 0,
    feelslike: 0,
  });

  const fetchLocation = async (city: string): Promise<Location> => {
    try {
      const { data } = await axios.get<Location[]>(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=4c4f0b1876954338598a7be96c66527b`
      );
      return data[0];
    } catch (error) {
      throw new Error("Could not fetch geo data");
    }
  };

  const fetchWeatherForecast = async (
    lat: number,
    lon: number
  ): Promise<WeatherForecast> => {
    try {
      const { data } = await axios.get<WeatherForecast>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=4c4f0b1876954338598a7be96c66527b`
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch weather data");
    }
  };

  React.useEffect(() => {
    const getWeatherInfo = async () => {
      try {
        const location = await fetchLocation(city);
        const weatherForecast = await fetchWeatherForecast(
          location.lat,
          location.lon
        );

        setInfo({
          city: location.name,
          temp: weatherForecast.main.temp,
          icon: `https://openweathermap.org/img/wn/${weatherForecast.weather?.[0]?.icon}@2x.png`,
          humidity: weatherForecast.main.humidity,
          windspeed: weatherForecast.wind.speed,
          feelslike: weatherForecast.main.feels_like,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getWeatherInfo();
  }, [city]);

  return { info };
}

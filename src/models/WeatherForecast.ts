interface WeatherForecast {
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    icon: string;
  }[];
}

export type { WeatherForecast };

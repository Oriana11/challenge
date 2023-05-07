interface WeatherForecast {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

export type { WeatherForecast };

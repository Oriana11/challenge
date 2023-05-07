import useWeather from "../../hooks/useWeather";

interface WeatherProps {
  city: string;
}

export default function Weather({ city }: WeatherProps) {
  const { info } = useWeather(city);
  console.log("Weather.tsx: info is : " + info);
  return (
    <>
      <div className="weather-info">
        <h1>{info?.city}</h1>
        <p>{info?.temp && ~~info.temp} Celcius</p>
        <p>{info?.humidity && ~~info.humidity} Humidity</p>
        <p>{info?.windspeed && ~~info.windspeed} Wind speed</p>

        <img src={info?.icon} alt="weather icon" />
      </div>
    </>
  );
}

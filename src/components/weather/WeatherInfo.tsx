interface WeatherInfoProps {
  city: string;
  temp: number;
  icon: string;
}

export default function WeatherInfo(info: WeatherInfoProps) {
  return (
    <>
      <div className="weather-info">
        <h1>{info?.city}</h1>
        <p>{info?.temp && ~~info.temp} Celcius</p>
        <img src={info?.icon} alt="weather icon" />
      </div>
    </>
  );
}

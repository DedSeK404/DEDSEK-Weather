export const WeatherHeader = ({ Data }) => {
  return (
    <div>
      <h1>{Data.location.country}</h1>
      <p>{Data.location.lat}</p>
      <p>{Data.location.lon}</p>
      <h2>{Data.location.tz_id}</h2>
      <h3>{Data.location.localtime}</h3>
      <p>{Data.current.temp_c}°</p>
    </div>
  );
};

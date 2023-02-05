export const WeatherHeader = ({ Data }) => {
  return (
    <div className="WeatherHeader">
      <br></br>
      <br></br>
      <div className="HeaderBox">
        <p className="country">{Data.location && Data.location.country}</p>
        <p className="id">{Data.location && Data.location.tz_id}</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <p className="lat">{Data.location && Data.location.lat}</p>
          <p className="lat">{Data.location && Data.location.lon}</p>
        </div>
        <p className="time">{Data.location && Data.location.localtime}</p>

        <p className="condition">
          {Data.current.condition && Data.current.condition.text}
        </p>
        <img
          style={{ width: "90px", marginTop: "-15px" }}
          src={Data.current.condition && Data.current.condition.icon}
          alt="WEATHER ICON"
        />

        <p className="temp">{Data.current && Data.current.temp_c}°</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <p
            style={{ color: "white", fontFamily: "Rubik", marginTop: "-30px" }}
          >
            Feels like :
          </p>
          <p className="feel">{Data.current && Data.current.feelslike_c}°</p>
        </div>
      </div>
    </div>
  );
};

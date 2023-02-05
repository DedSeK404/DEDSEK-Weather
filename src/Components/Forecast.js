import axios from "axios";
import React, { useEffect, useState } from "react";

export const Forecast = ({ submit }) => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getForecastData = async () => {
      try {
        const res = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=17a973d87cd74c8cadb124905230402&q=${submit}&days=4&aqi=no&alerts=no`
        );
        setForecastData(res.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getForecastData();
  }, [submit]);
  console.log(forecastData);
  return (
    <div className="forecastBox">
      {" "}
      {loading ? (
        <img style={{ marginLeft: "60%" }} src="/Data.png" alt="GETTING DATA" />
      ) : (
        <div style={{ display: "flex", gap: "30px", marginLeft: "2%" }}>
          {/* 1st day Forecast  */}
          <section>
            <div className="ForecastDay">
              <p>{forecastData && forecastData.forecast.forecastday[0].date}</p>
              <p>
                {forecastData &&
                  forecastData.forecast.forecastday[0].day.condition.text}
              </p>
              <img
                src={
                  forecastData &&
                  forecastData.forecast.forecastday[0].day.condition.icon
                }
                alt="WEATHER ICON"
              />

              <p className="maxTemp">Max Temp:</p>
              <p className="TempFore">
                {forecastData &&
                  forecastData.forecast.forecastday[0].day.maxtemp_c}
                °
              </p>

              <p>Min Temp:</p>
              <p className="TempFore">
                {forecastData &&
                  forecastData.forecast.forecastday[0].day.mintemp_c}
                °
              </p>
            </div>
            <main>
              <div>
                <div className="sun">
                  <p>Sunrise :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[0].astro.sunrise}
                  </p>
                </div>
                <div className="sunset">
                  <p>Sunset :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[0].astro.sunset}
                  </p>
                </div>
                <div className="moonrise">
                  <p>Moonrise :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[0].astro.moonrise}
                  </p>
                </div>
              </div>
            </main>
          </section>
          {/* 2nd day Forecast  */}
          <section>
            <div className="ForecastDay">
              <p>{forecastData && forecastData.forecast.forecastday[1].date}</p>
              <p>
                {forecastData &&
                  forecastData.forecast.forecastday[1].day.condition.text}
              </p>
              <img
                src={
                  forecastData &&
                  forecastData.forecast.forecastday[1].day.condition.icon
                }
                alt="WEATHER ICON"
              />

              <p className="maxTemp">Max Temp:</p>
              <p className="TempFore">
                {forecastData &&
                  forecastData.forecast.forecastday[1].day.maxtemp_c}
                °
              </p>

              <p>Min Temp:</p>
              <p className="TempFore">
                {forecastData &&
                  forecastData.forecast.forecastday[1].day.mintemp_c}
                °
              </p>
            </div>
            <main>
              <div>
                <div className="sun">
                  <p>Sunrise :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[1].astro.sunrise}
                  </p>
                </div>
                <div className="sunset">
                  <p>Sunset :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[1].astro.sunset}
                  </p>
                </div>
                <div className="moonrise">
                  <p>Moonrise :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[1].astro.moonrise}
                  </p>
                </div>
              </div>
            </main>
          </section>
          {/* 3rd day Forecast  */}
          <section>
            <div className="ForecastDay">
              <p>{forecastData && forecastData.forecast.forecastday[2].date}</p>
              <p>
                {forecastData &&
                  forecastData.forecast.forecastday[2].day.condition.text}
              </p>
              <img
                src={
                  forecastData &&
                  forecastData.forecast.forecastday[2].day.condition.icon
                }
                alt="WEATHER ICON"
              />

              <p className="maxTemp">Max Temp:</p>
              <p className="TempFore">
                {forecastData &&
                  forecastData.forecast.forecastday[2].day.maxtemp_c}
                °
              </p>

              <p>Min Temp:</p>
              <p className="TempFore">
                {forecastData &&
                  forecastData.forecast.forecastday[2].day.mintemp_c}
                °
              </p>
            </div>
            <main>
              <div>
                <div className="sun">
                  <p>Sunrise :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[2].astro.sunrise}
                  </p>
                </div>
                <div className="sunset">
                  <p>Sunset :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[2].astro.sunset}
                  </p>
                </div>
                <div className="moonrise">
                  <p>Moonrise :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[2].astro.moonrise}
                  </p>
                </div>
              </div>
            </main>
          </section>
          {/* 4th day Forecast  */}
          <section>
            <div className="ForecastDay">
              <p>{forecastData && forecastData.forecast.forecastday[3].date}</p>
              <p>
                {forecastData &&
                  forecastData.forecast.forecastday[3].day.condition.text}
              </p>
              <img
                src={
                  forecastData &&
                  forecastData.forecast.forecastday[3].day.condition.icon
                }
                alt="WEATHER ICON"
              />

              <p className="maxTemp">Max Temp:</p>
              <p className="TempFore">
                {forecastData &&
                  forecastData.forecast.forecastday[3].day.maxtemp_c}
                °
              </p>

              <p>Min Temp:</p>
              <p className="TempFore">
                {forecastData &&
                  forecastData.forecast.forecastday[3].day.mintemp_c}
                °
              </p>
            </div>
            <main>
              <div>
                <div className="sun">
                  <p>Sunrise :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[3].astro.sunrise}
                  </p>
                </div>
                <div className="sunset">
                  <p>Sunset :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[3].astro.sunset}
                  </p>
                </div>
                <div className="moonrise">
                  <p>Moonrise :</p>
                  <p>
                    {forecastData &&
                      forecastData.forecast.forecastday[3].astro.moonrise}
                  </p>
                </div>
              </div>
            </main>
          </section>
        </div>
      )}
    </div>
  );
};

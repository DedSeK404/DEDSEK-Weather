import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getforecastdata } from "../JS/Actions/ForecastActions";

export const Forecast = ({ submit }) => {
  const dispatch = useDispatch();

  const forecastData = useSelector((state) => state.forecast.forecastdata);
  const loading = useSelector((state) => state.forecast.loadingforecast);

  useEffect(() => {
    dispatch(getforecastdata(submit));
  }, [submit, dispatch]);

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

import axios from "axios";
import React, { useEffect, useState } from "react";

export const Forecast = ({ submit }) => {
  const [forecastData, setForecastData] = useState([]);
  useEffect(() => {
    const getForecastData = async () => {
      try {
        const res = await axios.get(
          //  "http://api.weatherapi.com/v1/current.json?key=17a973d87cd74c8cadb124905230402&q=morocco&aqi=no"
          `http://api.weatherapi.com/v1/forecast.json?key=17a973d87cd74c8cadb124905230402&q=${submit}&days=4&aqi=no&alerts=no`
        );
        setForecastData(res.data);
        //console.log(res.data.location);
      } catch (error) {
        //console.log(error);
      }
    };
    getForecastData();
  }, [submit]);
  //console.log(forecastData.forecast.forecastday);
  return (
    <div>
      <div>
        <p>{forecastData.forecast.forecastday[0].date}</p>
        <p>{forecastData.forecast.forecastday[0].day.condition.text}</p>
        <img src={forecastData.forecast.forecastday[0].day.condition.icon} />
        <p>{forecastData.forecast.forecastday[0].day.maxtemp_c}°</p>
        <p>{forecastData.forecast.forecastday[0].day.mintemp_c}°</p>
      </div>
      <div>
      <p>{forecastData.forecast.forecastday[1].date}</p>
        <p>{forecastData.forecast.forecastday[1].day.condition.text}</p>
        <img src={forecastData.forecast.forecastday[1].day.condition.icon} />
        <p>{forecastData.forecast.forecastday[1].day.maxtemp_c}°</p>
        <p>{forecastData.forecast.forecastday[1].day.mintemp_c}°</p>
      </div>
      <div>
      <p>{forecastData.forecast.forecastday[2].date}</p>
        <p>{forecastData.forecast.forecastday[2].day.condition.text}</p>
        <img src={forecastData.forecast.forecastday[2].day.condition.icon} />
        <p>{forecastData.forecast.forecastday[2].day.maxtemp_c}°</p>
        <p>{forecastData.forecast.forecastday[2].day.mintemp_c}°</p>
      </div>
      <div>
      <p>{forecastData.forecast.forecastday[3].date}</p>
        <p>{forecastData.forecast.forecastday[3].day.condition.text}</p>
        <img src={forecastData.forecast.forecastday[3].day.condition.icon} />
        <p>{forecastData.forecast.forecastday[3].day.maxtemp_c}°</p>
        <p>{forecastData.forecast.forecastday[3].day.mintemp_c}°</p>
      </div>
    </div>
  );
};

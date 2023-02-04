import axios from "axios";
import React, { useEffect, useState } from "react";
import { Forecast } from "./Forecast";
import { WeatherHeader } from "./WeatherHeader";
import HorizontalScroll from "react-scroll-horizontal";

export const HeaderApi = () => {
  const child = { width: `30em`, height: `100%` };
  const parent = { width: `60em`, height: `100%` };
  const [weatherData, setWeatherData] = useState([]);
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("Tunisia");
  //console.log(search)
  useEffect(() => {
    
    const getData = async () => {
      try {
        const res = await axios.get(
          //  "http://api.weatherapi.com/v1/current.json?key=17a973d87cd74c8cadb124905230402&q=morocco&aqi=no"
          `http://api.weatherapi.com/v1/current.json?key=17a973d87cd74c8cadb124905230402&q=${submit}&aqi=no`
        );
        setWeatherData(res.data);
        //console.log(res.data.location);
      } catch (error) {
        //console.log(error);
      }
    };
    getData();
  }, [submit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(search);
  };

  //console.log(weatherData);
  //console.log(submit);
  console.log(weatherData);
  return (
    
    <div style={parent}>
       
      <div style={child}>
        <input
          type="text"
          placeholder="Search By Location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>

        <WeatherHeader Data={weatherData} />
      </div>
      <div style={child}>
        <Forecast submit={submit} />
      </div>
      
    </div>
    
  );
};

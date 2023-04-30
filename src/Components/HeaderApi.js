import axios from "axios";
import React, { useEffect, useState } from "react";
import { Forecast } from "./Forecast";
import { WeatherHeader } from "./WeatherHeader";
import { motion, AnimatePresence } from "framer-motion";
import { WeatherTabs } from "./WeatheTabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Astro } from "./Horoscope";
import Spinner from 'react-bootstrap/Spinner';

export const HeaderApi = () => {
  const [show, setShow] = useState(true);

  const [value, setValue] = useState(0);

  const child = { width: `30em`, height: `100%` };
  const parent = { width: `60em`, height: `100%` };
  const [weatherData, setWeatherData] = useState([]);
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("Tunisia");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=17a973d87cd74c8cadb124905230402&q=${submit}&aqi=no`
        );
        setWeatherData(res.data);

        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [submit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(search);
    handleClickStyle();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShow(true);
  };

  const handleClickForecast = (event) => {
    setShow(true);
  };
  const handleClickHoroscope = (event) => {
    setShow(false);
  };
  const [style, setStyle] = useState("");
  const handleClickStyle = () => {
    setStyle({ opacity: "1", animation: "fade 1s linear" });
    setTimeout(() => setStyle(""), 700);
  };

  return (
    <div width="100vw">
      <Box>
        <TabContext value={value}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <TabList className="tabsFront" onChange={handleChange} center>
              <Tab
                style={{ marginLeft: "10%", color: "white" }}
                label="Current Weather"
              />
              <Tab
                style={{ marginLeft: "20%", color: "white" }}
                label="Forecast"
                onClick={handleClickForecast}
              />
              <Tab
                style={{ marginLeft: "20%", color: "white" }}
                label="Horoscope"
                onClick={handleClickHoroscope}
              />
            </TabList>
            <AnimatePresence>
              <TabPanel value={0} label="tab1">
                <motion.div
                  style={style}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="inputBox">
                    <input
                      className="inputStyle"
                      type="text"
                      placeholder="Search By Location"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />

                    <button className="searchButton" onClick={handleSubmit}>
                      Search
                    </button>
                  </div>

                  {loading ? (
                    <img
                      style={{ marginLeft: "60%" }}
                      src="/Data.png"
                      alt="GETTING DATA"
                    />
                  ) : (
                    <WeatherHeader Data={weatherData} />
                  )}
                </motion.div>
              </TabPanel>
            </AnimatePresence>
            <AnimatePresence>
              <TabPanel value={1} label="tab2">
                <motion.div
                  style={child}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {loading ? (
                    <div className="spinner">
                     <Spinner style={{margin:"auto"}} animation="border" role="status">
                     <span className="visually-hidden">Loading...</span>
                   </Spinner>
                   </div>
                  ) : (
                    <Forecast submit={submit} />
                  )}
                </motion.div>
              </TabPanel>
              <TabPanel value={2} label="tab3">
                <motion.div
                  style={child}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {loading ? (
                    <img
                      style={{ marginLeft: "60%" }}
                      src="/Data.png"
                      alt="GETTING DATA"
                    />
                  ) : (
                    <Astro />
                  )}
                </motion.div>
              </TabPanel>
            </AnimatePresence>
          </Box>
        </TabContext>
      </Box>

      <div style={parent}>
        {loading ? (
          <img
            style={{ marginLeft: "60%" }}
            src="/Data.png"
            alt="GETTING DATA"
          />
        ) : show ? (
          <WeatherTabs weatherData={weatherData} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

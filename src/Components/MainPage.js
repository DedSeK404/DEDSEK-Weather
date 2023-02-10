import React, { useEffect, useState } from "react";
import { Forecast } from "./Forecast";
import { motion, AnimatePresence } from "framer-motion";
import { WeatherTabs } from "./WeatherTabs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import { Astro } from "./Horoscope";
import { useDispatch, useSelector } from "react-redux";
import { getcurrentdata } from "../JS/Actions/actions";
import { CurrentWeather } from "./CurrentWeather";

export const MainPage = () => {
  const dispatch = useDispatch();
  const weatherInfo = useSelector((state) => state.current.currentweather);
  const loading = useSelector((state) => state.current.loading);
  const [header, setHeader] = useState(false);
  const [forecast, setForecast] = useState(false);
  const [horoscope, setHoroscope] = useState(false);
  const [show, setShow] = useState(true);
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("Tunisia");
  const [style, setStyle] = useState("");

  const child = { width: `30em`, height: `100%` };
  const parent = { width: `60em`, height: `100%` };

  useEffect(() => {
    dispatch(getcurrentdata(submit));
  }, [submit, dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(search);
    handleClickStyle();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShow(true);
  };

  const handleClickCurrent = (event) => {
    setHeader(value);
  };

  const handleClickForecast = (event) => {
    setForecast(value);
    setShow(true);
  };

  const handleClickHoroscope = (event) => {
    setHoroscope(value);
    setShow(false);
  };

  const handleClickStyle = () => {
    setStyle({ opacity: "1", animation: "fade 1s linear" });
    setTimeout(() => setStyle(""), 700);
  };

  return (
    <div>
      <Box>
        <TabContext value={value}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <TabList className="tabsFront" onChange={handleChange} center>
              <Tab
                style={{ marginLeft: "10%", color: "white" }}
                label="Current Weather"
                onClick={handleClickCurrent}
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
                    <CurrentWeather Data={weatherInfo} />
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
                    <img
                      style={{ marginLeft: "60%" }}
                      src="/Data.png"
                      alt="GETTING DATA"
                    />
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
          <WeatherTabs weatherData={weatherInfo} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

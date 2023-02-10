import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const WeatherTabs = ({ weatherData }) => {
  const [precipitation, setPrecipitation] = useState(false);
  const [wind, setWind] = useState(false);
  const [moreInfo, setmoreInfo] = useState(false);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (event) => {
    setPrecipitation(value);
  };
  const handleClickWind = (event) => {
    setWind(value);
  };
  const handleClickInfo = (event) => {
    setmoreInfo(value);
  };
  return (
    <div>
      <Box>
        <TabContext value={value}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <TabList className="Tabs" onChange={handleChange} start>
              <Tab
                style={{ color: "white" }}
                label="Precipitation"
                onClick={handleClick}
              />
              <Tab
                style={{ color: "white" }}
                label="Wind"
                onClick={handleClickWind}
              />
              <Tab
                style={{ color: "white" }}
                label="More Info"
                onClick={handleClickInfo}
              />
            </TabList>
            <div className="TabPanel" style={{ color: "#A1A1A1" }}>
              <AnimatePresence>
                <TabPanel value={0} label="tab1">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div>
                      <div style={{ display: "flex", gap: "2%" }}>
                        <p>precipitation :</p>
                        <p>
                          {weatherData.current && weatherData.current.precip_in}
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: "2%" }}>
                        <p>Humidity :</p>
                        <p>
                          {weatherData.current && weatherData.current.humidity}
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: "2%" }}>
                        <p>Pressure :</p>
                        <p>
                          {weatherData.current &&
                            weatherData.current.pressure_in}
                        </p>
                      </div>
                      <img
                        style={{
                          marginLeft: "85%",
                          width: "100px",
                          marginTop: "-12%",
                        }}
                        src="/Logo.png"
                        alt="Logo"
                      />
                    </div>
                  </motion.div>
                </TabPanel>
              </AnimatePresence>

              <AnimatePresence>
                <TabPanel value={1} label="tab2">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div>
                      <div style={{ display: "flex", gap: "2%" }}>
                        <p>Wind Degree :</p>
                        <p>
                          {weatherData.current &&
                            weatherData.current.wind_degree}
                          °
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: "2%" }}>
                        <p>Wind Direction :</p>
                        <p>
                          {weatherData.current && weatherData.current.wind_dir}
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: "2%" }}>
                        <p>Wind Speed :</p>
                        <p>
                          {weatherData.current && weatherData.current.wind_kph}{" "}
                          Kph
                        </p>
                      </div>
                      <img
                        style={{
                          marginLeft: "85%",
                          width: "100px",
                          marginTop: "-12%",
                        }}
                        src="/Logo.png"
                        alt="Logo"
                      />
                    </div>
                  </motion.div>
                </TabPanel>
              </AnimatePresence>
              <AnimatePresence>
                <TabPanel value={2} label="tab3">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div>
                      <div style={{ display: "flex", gap: "2%" }}>
                        <p>Last Updated :</p>
                        <p>
                          {weatherData.current &&
                            weatherData.current.last_updated}
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: "2%" }}>
                        <p>UV Index :</p>
                        <p>{weatherData.current && weatherData.current.uv}</p>
                      </div>
                      <div style={{ display: "flex", gap: "2%" }}>
                        <p>Gust Speed :</p>
                        <p>
                          {weatherData.current && weatherData.current.gust_kph}{" "}
                          Kph
                        </p>
                      </div>
                      <img
                        style={{
                          marginLeft: "85%",
                          width: "100px",
                          marginTop: "-12%",
                        }}
                        src="/Logo.png"
                        alt="Logo"
                      />
                    </div>
                  </motion.div>
                </TabPanel>
              </AnimatePresence>
            </div>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
};



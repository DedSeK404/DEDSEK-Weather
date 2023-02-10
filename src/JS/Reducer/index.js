import { combineReducers } from "redux";
import { weatherReducer } from "./reducer";
import { ForecastReducer } from "./ForecastReducer";
import { HoroscopeReducer } from "./HoroscopeReducer";

export const routeReducers = combineReducers({
  current: weatherReducer,
  forecast: ForecastReducer,
  horoscope: HoroscopeReducer,
});

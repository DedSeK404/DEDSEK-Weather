import axios from "axios";
import {
  GETFORECASTFAILED,
  GETFORECASTSUCSESS,
  LOADINGFORECAST,
} from "../ActionTypes/ForecastTypes";

export const getforecastdata = (submit) => async (dispatch) => {
  dispatch({
    type: LOADINGFORECAST,
  });
  try {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=17a973d87cd74c8cadb124905230402&q=${submit}&days=4&aqi=no&alerts=no`
    );
    dispatch({ type: GETFORECASTSUCSESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GETFORECASTFAILED, payload: error });
  }
};

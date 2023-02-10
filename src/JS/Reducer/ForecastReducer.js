import { GETFORECASTFAILED, GETFORECASTSUCSESS, LOADINGFORECAST } from "../ActionTypes/ForecastTypes";

const initialState = {
  loadingforecast: true,
  error: null,
  forecastdata: [],
};

export const ForecastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADINGFORECAST:
      return { ...state, loadingforecast: true };

    case GETFORECASTSUCSESS:
      return { ...state, forecastdata: payload, loadingforecast: false };

    case GETFORECASTFAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};

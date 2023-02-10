import { GETWEATHERCURRENTFAILED, GETWEATHERCURRENTSUCSESS, LOADING } from "../ActionTypes/actionTypes";

const initialState = {
  loading: true,
  currentweather: [],
  error: null,
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case GETWEATHERCURRENTSUCSESS:
      return { ...state, currentweather: payload, loading: false };
    case GETWEATHERCURRENTFAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};

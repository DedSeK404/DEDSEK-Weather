import { GETHOROSCOPEFAILED, GETHOROSCOPESUCSESS, LOADINGHOROSCOPE } from "../ActionTypes/HoroscopeTypes";


const initialState = {
  loadinghoroscope: true,
  error: null,
  horoscopedata: [],
};

export const HoroscopeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADINGHOROSCOPE:
      return { ...state, loadinghoroscope: true };

    case GETHOROSCOPESUCSESS:
      return { ...state, horoscopedata: payload, loadinghoroscope: false };

    case GETHOROSCOPEFAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};

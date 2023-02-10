import axios from "axios";
import { GETHOROSCOPEFAILED, GETHOROSCOPESUCSESS, LOADINGHOROSCOPE } from "../ActionTypes/HoroscopeTypes";


export const gethoroscopedata = (select) => async (dispatch) => {
  dispatch({
    type: LOADINGHOROSCOPE,
  });
  try {
        const res = await axios.post(`https://aztro.sameerkumar.website/?sign=${select}&day=today`);
    dispatch({ type: GETHOROSCOPESUCSESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GETHOROSCOPEFAILED, payload: error });
  }
};
import axios from "axios"
import { GETWEATHERCURRENTFAILED, GETWEATHERCURRENTSUCSESS, LOADING } from "../Reducer/reducer"

export const getcurrentdata = (submit) => async (dispatch) => {
dispatch({
    type: LOADING,

})
try{
    const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=17a973d87cd74c8cadb124905230402&q=${submit}&aqi=no`
      )
     dispatch({type: GETWEATHERCURRENTSUCSESS, payload: res.data})
    }
catch(error) {
dispatch({type: GETWEATHERCURRENTFAILED, payload: error})
}
}
import axios from "axios";
import { GETDATAFAIL, GETDATAREQUEST, GETDATASUCESSFUL } from "./actionTypes"

export const getData = (token) => (dispatch) => {
    dispatch({ type: GETDATAREQUEST });
    axios
      .get(`https://barajiakurmartbe.onrender.com/data/`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token here
        },
      })
      .then((res) => {
        dispatch({ type: GETDATASUCESSFUL, payload: res.data.data });
        console.log(res.data.data);
      })
      .catch((err) => {
        dispatch({ type: GETDATAFAIL });
        console.log(err.message);
      });
  };
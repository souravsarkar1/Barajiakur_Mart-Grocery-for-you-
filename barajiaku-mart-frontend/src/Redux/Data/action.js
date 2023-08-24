import axios from "axios";
import { GETDATAREQUEST } from "./actionTypes"

export const getData = ()=>(dispatch)=>{
    dispatch({type : GETDATAREQUEST});
    axios.get(``)
}
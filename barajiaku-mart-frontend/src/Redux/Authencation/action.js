import axios from "axios";
import { BACKFROMLOGINFAIL, BACKFROMSIGNUPFAIL, LOGINEQUEST, LOGINFAIL, LOGINSUCESS, LOGOUTSUCESSFUL, SIGNUPFAIL, SIGNUPREQUEST, SIGNUPSUCESS } from "./actionTypes"

export const signup = (formData, toast) => (dispatch) => {
  dispatch({ type: SIGNUPREQUEST });
  return axios.post(`https://barajiakurmartbe.onrender.com/user/register`, formData).then((res) => {
    console.log(res.data);
    dispatch({ type: SIGNUPSUCESS });
    toast({
      title: res.data.msg === "New user has been added" ? "Account created." : 'Email is already registered',
      description: res.data.msg + " please login with that account",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: "top"
    })
  }).catch((err) => {
    console.log(err.message);
    dispatch({ type: SIGNUPFAIL })
    toast({
      title: 'Request Fail',
      description: "Something Went To Wrong!!",
      status: 'error',
      duration: 9000,
      isClosable: true,
      position: "top"
    })
    return;
  })
}

export const signupErrorHandeling = () => (dispatch) => {
  dispatch({ type: BACKFROMSIGNUPFAIL })
}


export const login = (data, toast) => (dispatch) => {
  dispatch({ type: LOGINEQUEST });
  return axios.post(`https://barajiakurmartbe.onrender.com/user/login`, data).then((res) => {
    dispatch({ type: LOGINSUCESS, payload: res.data.token })

    console.log(res.data);

    toast({
      title: res.data.msg === "Login Successful!!" ? res.data.msg : 'Wrong Credentialsd',
      description: res.data.msg + " Wel Come",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: "top"
    })
  }).catch((err) => {
    dispatch({ type: LOGINFAIL });
    console.log(err);
    toast({
      title: 'Request Fail',
      description: `Email or Password Invalid`,
      status: 'error',
      duration: 9000,
      isClosable: true,
      position: "top"
    })
  })
}
export const loginErrorHandeling = () => (dispatch) => {
  dispatch({ type: BACKFROMLOGINFAIL })
}

export const logoutButtonHandeling = () => (dispatch) => {
  dispatch({ type: LOGOUTSUCESSFUL });
}
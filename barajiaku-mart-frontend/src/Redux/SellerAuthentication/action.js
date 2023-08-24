import axios from "axios";
import { SELLERBACKFROMLOGINFAIL, SELLERBACKFROMSIGNUPFAIL, SELLERLOGINEQUEST, SELLERLOGINFAIL, SELLERLOGINSUCESS, SELLERSIGNUPFAIL, SELLERSIGNUPREQUEST, SELLERSIGNUPSUCESS } from "./actionTypes"

export const sellerSignup = (formData,toast)=>(dispatch)=>{
    dispatch({type : SELLERSIGNUPREQUEST});
   return axios.post(`https://barajiakurmartbe.onrender.com/seller/register`,formData).then((res)=>{
        console.log(res.data);
        dispatch({type : SELLERSIGNUPSUCESS});
        toast({
          title: res.data.msg === "New user has been added" ? "Account created." : 'Email is already registered',
          description: res.data.msg + " please login with that account",
          status: 'success',
          duration: 5000,
          isClosable: true,
          position : "top"
        })
      }).catch((err)=>{
        console.log(err.message);
        dispatch({type : SELLERSIGNUPFAIL})
        toast({
          title: 'Request Fail',
          description: "Something Went To Wrong!!",
          status: 'error',
          duration: 9000,
          isClosable: true,
          position : "top"
        })
        return;
      })
}

export const  sellerSignupErrorHandeling = ()=>(dispatch)=>{
    dispatch({type : SELLERBACKFROMSIGNUPFAIL})
}


export const sellerLogin = (data,toast)=>(dispatch)=>{
    dispatch({type : SELLERLOGINEQUEST});
   return axios.post(`https://barajiakurmartbe.onrender.com/seller/login`,data).then((res)=>{
        dispatch({type : SELLERLOGINSUCESS , payload : res.data.token })

        console.log(res.data);

        toast({
            title: res.data.msg === "Login Successful!!" ? res.data.msg : 'Wrong Credentialsd',
            description: res.data.msg + " Wel Come",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position : "top"
          })
    }).catch((err)=>{
        dispatch({type : SELLERLOGINFAIL});
        console.log(err);
        toast({
            title: 'Request Fail',
            description: `Email or Password Invalid`,
            status: 'error',
            duration: 9000,
            isClosable: true,
            position : "top"
          })
    })
}
export const  sellerLoginErrorHandeling = ()=>(dispatch)=>{
  dispatch({type : SELLERBACKFROMLOGINFAIL})
}
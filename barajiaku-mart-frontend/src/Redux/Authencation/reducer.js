import { BACKFROMLOGINFAIL, BACKFROMSIGNUPFAIL, LOGINEQUEST, LOGINFAIL, LOGINSUCESS, LOGOUTSUCESSFUL, SIGNUPFAIL, SIGNUPREQUEST, SIGNUPSUCESS } from "./actionTypes";

const initialState = {
    signupisLoading: false,
    loginisLoading: false,
    isAuth: false,
    signupisError: false,
    loginisError: false,
    token: ''
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUPREQUEST:
            return { ...state, signupisLoading: true };
        case SIGNUPSUCESS:
            return { ...state, signupisLoading: false }
        case SIGNUPFAIL:
            return { ...state, signupisLoading: false, signupisError: true };
        case BACKFROMSIGNUPFAIL:
            return { ...state, signupisError: false };
        case BACKFROMLOGINFAIL:
            return { ...state, loginisError: false };
        case LOGINEQUEST:
            return { ...state, loginisLoading: true };
        case LOGINSUCESS:
            return { ...state, loginisLoading: false, isAuth: true, token: payload }
        case LOGINFAIL:
            return { ...state, loginisLoading: false, loginisError: true }
            case LOGOUTSUCESSFUL : 
            return {...state,isAuth : false,loginisLoading : false,loginisError : false,token : ""};
        default:
            return state;
    }
}
import { BACKFROMSIGNUPFAIL, LOGINEQUEST, LOGINFAIL, LOGINSUCESS, SIGNUPFAIL, SIGNUPREQUEST, SIGNUPSUCESS } from "./actionTypes";

const initialState = {
    signupisLoading: false,
    loginisLoading: false,
    isAuth: false,
    isError: false,
    token: ''
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGNUPREQUEST:
            return { ...state, signupisLoading: true };
        case SIGNUPSUCESS:
            return { ...state, signupisLoading: false }
        case SIGNUPFAIL:
            return { ...state, signupisLoading: false, isError: true };
        case BACKFROMSIGNUPFAIL:
            return { ...state, isError: false };
        case LOGINEQUEST:
            return { ...state, loginisLoading: true };
        case LOGINSUCESS:
            return { ...state, loginisLoading: false, isAuth: true, token: payload }
        case LOGINFAIL:
            return { ...state, loginisLoading: false, isError: true }
        default:
            return state;
    }
}
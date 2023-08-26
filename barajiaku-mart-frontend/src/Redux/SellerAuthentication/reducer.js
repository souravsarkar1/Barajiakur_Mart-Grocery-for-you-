import { SELLERBACKFROMLOGINFAIL, SELLERBACKFROMSIGNUPFAIL, SELLERLOGINEQUEST, SELLERLOGINFAIL, SELLERLOGINSUCESS, SELLERLOGOUTSUCESSFUL, SELLERSIGNUPFAIL, SELLERSIGNUPREQUEST, SELLERSIGNUPSUCESS } from "./actionTypes";

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
        case SELLERSIGNUPREQUEST:
            return { ...state, signupisLoading: true };
        case SELLERSIGNUPSUCESS:
            return { ...state, signupisLoading: false }
        case SELLERSIGNUPFAIL:
            return { ...state, signupisLoading: false, signupisError: true };
        case SELLERBACKFROMSIGNUPFAIL:
            return { ...state, signupisError: false };
        case SELLERBACKFROMLOGINFAIL:
            return { ...state, loginisError: false };
        case SELLERLOGINEQUEST:
            return { ...state, loginisLoading: true };
        case SELLERLOGINSUCESS:
            return { ...state, loginisLoading: false, isAuth: true, token: payload }
        case SELLERLOGINFAIL:
            return { ...state, loginisLoading: false, loginisError: true }
        case SELLERLOGOUTSUCESSFUL:
            return {
                ...state, signupisLoading: false, loginisLoading: false, isAuth: false, signupisError: false, loginisError: false, token: ''
            }
        default:
            return state;
    }
}
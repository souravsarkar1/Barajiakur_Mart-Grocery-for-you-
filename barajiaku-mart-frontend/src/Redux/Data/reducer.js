import { GETDATAFAIL, GETDATAREQUEST, GETDATASUCESSFUL } from "./actionTypes";

const initialState = {
    getDataisLoading: false,
    data: [],
    getDataisError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GETDATAREQUEST:
            return { ...state, getDataisLoading: true };
        case GETDATASUCESSFUL:
            return { ...state, getDataisLoading: false, data: payload };
        case GETDATAFAIL:
            return { ...state, getDataisError: true, getDataisLoading: false }
        default:
            return state;
    }
}
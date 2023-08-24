import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./Authencation/reducer";
import { reducer as dataReducer } from "./Data/reducer";
import { reducer as sellerAuthReducer } from "./SellerAuthentication/reducer";
const rootReducer = combineReducers({
    authReducer , dataReducer,sellerAuthReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


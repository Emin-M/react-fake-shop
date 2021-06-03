import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import shopReducer from "./shopReducer";

export default combineReducers({
    shops: shopReducer,
    product: itemReducer
})
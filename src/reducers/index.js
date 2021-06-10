import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import shopReducer from "./shopReducer";
import cardReducer from "./cardReducer";

export default combineReducers({
    shops: shopReducer,
    product: itemReducer,
    card: cardReducer
})
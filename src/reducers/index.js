import { combineReducers } from "redux";
import reducerCart from "./reducersCart";

const rootReducer = combineReducers({
  cart: reducerCart,
});
export default rootReducer;

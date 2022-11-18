import { combineReducers } from "redux";
import currencies from "./currencies/currencies";

export const rootReducer = combineReducers({
  currency: currencies,
});

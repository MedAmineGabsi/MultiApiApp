import { combineReducers } from "redux";
import countriesCounter from "./countries";
import covidCounter from "./covid";

const reducers = combineReducers({
  countriesCounter,
  covidCounter,
});

export default reducers;

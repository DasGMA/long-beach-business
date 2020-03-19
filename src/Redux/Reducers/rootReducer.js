import { combineReducers } from "redux";
import {RegisterReducer} from "./RegisterReducer/RegisterReducer";
import {LoginReducer} from "./LoginReducer/LoginReducer";

const rootReducer = combineReducers({
  RegisterReducer,
  LoginReducer
});

export default rootReducer;
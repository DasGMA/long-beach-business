import { combineReducers } from "redux";
import {RegisterReducer} from "./RegisterReducer/RegisterReducer";
import {LoginReducer} from "./LoginReducer/LoginReducer";
import {CategoriesReducer} from './CategoriesReducer/CategoriesReducer';

const rootReducer = combineReducers({
  RegisterReducer,
  LoginReducer,
  CategoriesReducer
});

export default rootReducer;
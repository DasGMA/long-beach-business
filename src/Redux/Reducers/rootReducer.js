import { combineReducers } from "redux";
import {RegisterReducer} from "./RegisterReducer/RegisterReducer";
import {LoginReducer} from "./LoginReducer/LoginReducer";
import {CategoriesReducer} from './CategoriesReducer/CategoriesReducer';
import {ModalReducer} from './ModalReducer/ModalReducer';

const rootReducer = combineReducers({
  RegisterReducer,
  LoginReducer,
  CategoriesReducer,
  ModalReducer
});

export default rootReducer;
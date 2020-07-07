import {
    LOGINGIN,
    LOGGEDIN,
    SET_LOGIN_ERROR,
    RESET_ERRORS,
    SET_PASSWORD,
    SET_USERNAME,
    SET_VERIFY_PASSWORD
} from "../../Actions/LoginActions";

import {
  LOGGED_OUT
} from "../../Actions/LogoutActions";

import {
    GETTING_USER_INFO,
    GOT_USER_INFO_SUCCESS
} from '../../Actions/AccountActions';

const initialState = {
    userName: '',
    password: '',
    verifyPassword: '',
    logingin: false,
    loggedin: false,
    login_error: false,
    errors: {},
    data: null,
};

export const LoginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case SET_USERNAME:
          return {
            ...state,
            userName: payload
          };

        case SET_PASSWORD:
          return {
            ...state,
            password: payload
          };
        case SET_VERIFY_PASSWORD:
            return {
                ...state,
                verifyPassword: payload
            };

        case GETTING_USER_INFO:
        case LOGINGIN:
            return {
                ...state,
                logingin: true,
            };
        
        case LOGGEDIN:
            return {
                ...state,
                logingin: false,
                loggedin: true,
                data: payload,
            };
        
        case GOT_USER_INFO_SUCCESS:
            return {
                ...state,
                logingin: false,
                loggedin: true,
                data: payload,
            };

        case SET_LOGIN_ERROR:
            return {
                ...state,
                logingin: false,
                login_error: true,
                errors: {
                    ...state.errors,
                    [payload.errorName]: payload.message,
                },
            };

        case RESET_ERRORS:
            return {
                ...state,
                login_error: false,
                errors: {},
            };

        case LOGGED_OUT:
            return {
              ...state,
              userName: '',
              password: '',
              verifyPassword: '',
              logingin: false,
              loggedin: false,
              login_error: false,
              errors: {},
              data: null
            }

        default:
            return {
                ...state,
            };
    }
};

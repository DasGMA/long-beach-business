import {
    LOGINGIN,
    LOGGEDIN,
    LOGIN_ERROR
} from "../../Actions/LoginActions";

const initialState = {
    logingin: false,
    loggedin: false,
    login_error: false,
    error: null,
    data: null
}

export const LoginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case LOGINGIN:
            return {
                ...state,
                logingin: true
            }
        case LOGGEDIN:
            return {
                ...state,
                logingin: false,
                loggedin: true,
                data: payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                logingin: false,
                login_error: true,
                error: payload
            }
        default:
            return {
                ...state
            }
    }
}
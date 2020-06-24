import {
    LOGGED_OUT,
    LOGGING_OUT,
    SET_LOGOUT_ERROR
} from "../../Actions/LogoutActions";

const initialState = {
    logginOut: false,
    logoutErrors: {}
};

export const LogoutReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case LOGGING_OUT:
            return {
                ...state,
                loggingOut: true
            };
        
        case SET_LOGOUT_ERROR:
            return {
                ...state,
                logoutErrors: {
                    ...state.logoutErrors,
                    [payload.errorName]: payload.message
                },
                loggingOut: false
            };

        default:
            return {
                ...state,
            };
    }
};

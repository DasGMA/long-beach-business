import axios from 'axios';

export const LOGGING_OUT = "LOGGING_OUT";
export const LOGGED_OUT = "LOGGED_OUT";
export const SET_LOGOUT_ERROR = "SET_LOGOUT_ERROR";

const logoutUrl = "http://localhost:8888/users/logout";

export const setLogoutError = (errorName, message) => dispatch => {
    const error = {errorName, message};
    dispatch({
        type: SET_LOGOUT_ERROR,
        payload: error
    });
};

export const logoutAction = () => async dispatch => {
    dispatch({type: LOGGING_OUT});
    try {
        await axios.get(logoutUrl);
        localStorage.clear();
        sessionStorage.clear();

        dispatch({type: LOGGED_OUT});

    } catch (error) {
        dispatch(setLogoutError('LogoutError', 'Could not log out.'))
    }
};
import axios from 'axios';

export const LOGGING_OUT = "LOGGING_OUT";
export const LOGGED_OUT = "LOGGED_OUT";
export const SET_LOGOUT_ERROR = "SET_LOGOUT_ERROR";

const url = process.env.REACT_APP_BASE_URL;

export const setLogoutError = (errorName, message) => dispatch => {
    const error = {errorName, message};
    dispatch({
        type: SET_LOGOUT_ERROR,
        payload: error
    });
};

export const logoutAction = () => async (dispatch, getState) => {
    const user = getState().LoginReducer.data;

    dispatch({type: LOGGING_OUT});
    try {
        const data = {_id: user._id};
        const token = localStorage.getItem('Token');
        const headers = {headers: {'authorization': token}};
        await axios.post(`${url}logout`, data, headers);
        localStorage.clear();
        sessionStorage.clear();

        dispatch({type: LOGGED_OUT});

    } catch (error) {
        dispatch(setLogoutError('LogoutError', 'Could not log out.'));
    }
};
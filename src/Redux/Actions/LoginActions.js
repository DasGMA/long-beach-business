import Axios from "axios";

export const LOGINGIN = 'LOGINGIN';
export const LOGGEDIN = 'LOGGEDIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const url = "http://localhost:8888/users/login";

export const loginAction = (data) => async (dispatch) => {
    dispatch({ type: LOGINGIN });
    try {
        const login = await Axios.post(url, data);

        dispatch({
            type: LOGGEDIN,
            payload: login.data
        });
    } 
    catch (error) {
        console.log({Message: error});
        dispatch({
            type: LOGIN_ERROR,
            payload: error
        });
    }
}
import Axios from "axios";
export const REGISTERING = "REGISTERING";
export const REGISTERED = "REGISTERED";
export const REGISTER_ERROR = "REGISTER_ERROR";

const url = "localhost:8888/users/register";

export const registerAction = (data) => async (dispatch) => {
    dispatch({type: REGISTERING});
    try {
        const register = await Axios.post(url, data);
        dispatch({
            type: REGISTERED,
            payload: register.data 
        });
    } 
    catch (error) {
        dispatch({
            type: REGISTER_ERROR,
            payload: error
        })
    }
}
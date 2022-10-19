import axiosInstance from "../../../Interceptors/interceptors";

export const LOGGING_OUT = "LOGGING_OUT";
export const LOGGED_OUT = "LOGGED_OUT";
export const SET_LOGOUT_ERROR = "SET_LOGOUT_ERROR";

export const setLogoutError = (errorName, message) => (dispatch) => {
  const error = { errorName, message };
  dispatch({
    type: SET_LOGOUT_ERROR,
    payload: error,
  });
};

export const logoutAction = () => async (dispatch, getState) => {
  const user = getState().LoginReducer.data;

  dispatch({ type: LOGGING_OUT });
  try {
    const data = { _id: user._id };
    await axiosInstance.post(`${url}logout`, data);
    localStorage.clear();
    sessionStorage.clear();

    dispatch({ type: LOGGED_OUT });
  } catch (error) {
    dispatch(setLogoutError("LogoutError", "Could not log out."));
  }
};

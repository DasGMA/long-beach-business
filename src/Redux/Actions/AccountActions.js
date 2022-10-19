import axiosInstance from "../../../Interceptors/interceptors";

export const GETTING_USER_INFO = "GET_USER_INFO";
export const GOT_USER_INFO_SUCCESS = "GOT_USER_INFO_SUCCESS";
export const ACCOUNT_ERROR = "ACCOUNT_ERROR";

export const accountError = (errorName, message) => (dispatch) => {
  const error = { errorName, message };
  dispatch({
    type: ACCOUNT_ERROR,
    payload: error,
  });
};

export const getUserInfo = () => async (dispatch) => {
  dispatch({ type: GETTING_USER_INFO });

  try {
    const user = await axiosInstance.get(`/user`);

    dispatch({
      type: GOT_USER_INFO_SUCCESS,
      payload: user.data,
    });
  } catch (error) {
    dispatch(accountError("Account Error", "Error in getting account info."));
  }
};

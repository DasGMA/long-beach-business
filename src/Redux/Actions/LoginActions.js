import Axios from "axios";

export const LOGINGIN = "LOGINGIN";
export const LOGGEDIN = "LOGGEDIN";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
export const RESET_ERRORS = "RESET_ERRORS";
export const SET_USERNAME = "SET_USERNAME";
export const SET_PASSWORD = "SET_PASSWORD";

const loginUrl = "http://localhost:8888/users/login";

export const setUsername = value => dispatch => {
  dispatch({
    type: SET_USERNAME,
    payload: value
  })
};

export const setPassword = value => dispatch => {
  dispatch({
    type: SET_PASSWORD,
    payload: value
  })
};

export const setLoginError = (errorName, message) => dispatch => {
  const error = {errorName, message};
  dispatch({
    type: SET_LOGIN_ERROR,
    payload: error
  })
};

export const resetErrors = () => dispatch => {
  dispatch({
    type: RESET_ERRORS
  })
}

export const loginAction = () => async (dispatch, getState) => {
  dispatch({ type: LOGINGIN });
  try {
    const {userName, password} = getState().LoginReducer;
    const data = {userName, password};

    const login = await Axios.post(loginUrl, data);
    const {token, session} = login.data;

    localStorage.setItem('Token', token);
    sessionStorage.setItem('Session', session);

    dispatch({
      type: LOGGEDIN,
      payload: login.data
    });
    
  } catch (e) {
    for (const error of Object.entries(e.response.data)) {
      dispatch(setLoginError(error[0], error[1]));
    }
  }
};

export const changeHandle = event => dispatch => {
  event.preventDefault();
  const name = event.target.name;
  const value = event.target.value;

  switch(name) {
    case 'username':
    dispatch(setUsername(value));
      return;
    case 'password':
      dispatch(setPassword(value));
      return;
    default:
      return;
  }
}

export const checkForErrors = () => (dispatch, getState) => {
  const {userName, password} = getState().LoginReducer;

  let hasErrors = false;

  if (userName.length < 2) dispatch(
    setLoginError(
      'Username',
      'Username must be 2 or more characters length.'
    ),
    hasErrors = true
  );

  if (password.length < 2) dispatch(
    setLoginError(
      'Password',
      'Password must be 2 or more characters length.'
    ),
    hasErrors = true
  );


  return hasErrors;
}


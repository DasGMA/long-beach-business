import axiosInstance from "../../../Interceptors/interceptors";

export const REGISTERING = "REGISTERING";
export const REGISTERED = "REGISTERED";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const SET_USERNAME = "SET_USERNAME";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_FIRSTNAME = "SET_FIRSTNAME";
export const SET_LASTNAME = "SET_LASTNAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_REGISTER_ERROR = "SET_REGISTER_ERROR";
export const SET_ACCOUNT_TYPE = "SET_ACCOUNT_TYPE";
export const CLEAR_INPUT = "CLEAR_INPUT";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const setFirstName = (value) => (dispatch) => {
  dispatch({
    type: SET_FIRSTNAME,
    payload: value,
  });
};

export const setLastName = (value) => (dispatch) => {
  dispatch({
    type: SET_LASTNAME,
    payload: value,
  });
};

export const setUsername = (value) => (dispatch) => {
  dispatch({
    type: SET_USERNAME,
    payload: value,
  });
};

export const setEmail = (value) => (dispatch) => {
  dispatch({
    type: SET_EMAIL,
    payload: value,
  });
};

export const setPassword = (value) => (dispatch) => {
  dispatch({
    type: SET_PASSWORD,
    payload: value,
  });
};

export const setAccountType = (value) => (dispatch) => {
  dispatch({
    type: SET_ACCOUNT_TYPE,
    payload: value,
  });
};

export const setRegisterError = (errorName, message) => (dispatch) => {
  const error = { errorName, message };
  dispatch({
    type: SET_REGISTER_ERROR,
    payload: error,
  });
};

export const clearInput = () => (dispatch) => {
  dispatch({ type: CLEAR_INPUT });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const changeHandle = (event) => (dispatch, getState) => {
  event.preventDefault();
  const { value, name } = event.target;

  switch (name) {
    case "firstName":
      dispatch(setFirstName(value));
      return;
    case "lastName":
      dispatch(setLastName(value));
      return;
    case "username":
      dispatch(setUsername(value));
      return;
    case "password":
      dispatch(setPassword(value));
      return;
    case "email":
      dispatch(setEmail(value));
      return;
    case "accountType":
      dispatch(setAccountType(value));
      return;
    default:
      return;
  }
};

export const registerAction = () => async (dispatch, getState) => {
  dispatch({ type: REGISTERING });
  const { firstName, lastName, email, password, userName, accountType } =
    getState().RegisterReducer;

  const data = {
    firstName,
    lastName,
    email,
    password,
    userName,
    accountType,
  };

  try {
    const register = await axiosInstance.post(`/register`, data);
    dispatch({
      type: REGISTERED,
      payload: register.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload: error,
    });
  }
};

export const checkForRegisterErrors = () => (dispatch, getState) => {
  const { firstName, lastName, email, password, userName, accountType } =
    getState().RegisterReducer;

  let hasErrors = false;

  if (lastName.length < 2) {
    dispatch(
      setRegisterError(
        "lastName",
        "Lastname must be longer than 2 characters.",
      ),
    );
    hasErrors = true;
  }

  if (email.length < 2) {
    dispatch(setRegisterError("email", "Provide valid email."));
    hasErrors = true;
  }

  if (firstName.length < 2) {
    dispatch(
      setRegisterError(
        "firstName",
        "Firstname must be longer than 2 characters.",
      ),
    );
    hasErrors = true;
  }

  if (password.length < 2) {
    dispatch(
      setRegisterError(
        "password",
        "Password must be longer than 2 characters.",
      ),
    );
    hasErrors = true;
  }

  // if (accountType === 'business' && (zipcode.length < 5 || !zipcode.match(/^\d{5}$/gm))) {
  //     dispatch(setRegisterError('zipcode', 'Zipcode required field, must be 5 numerical characters long.'));
  //     hasErrors = true;
  // }

  if (userName.length < 2) {
    dispatch(
      setRegisterError(
        "userName",
        "Username must be longer than 2 characters.",
      ),
    );
    hasErrors = true;
  }

  if (accountType === "none") {
    dispatch(setRegisterError("accountType", "Account Type required field."));
    hasErrors = true;
  }

  return hasErrors;
};

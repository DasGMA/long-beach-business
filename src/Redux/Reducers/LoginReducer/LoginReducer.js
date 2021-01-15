import {
    LOGINGIN,
    LOGGEDIN,
    SET_LOGIN_ERROR,
    RESET_ERRORS,
    SET_PASSWORD,
    SET_USERNAME,
    SET_VERIFY_PASSWORD,
    RESET_INPUT
} from "../../Actions/LoginActions";

import {
  LOGGED_OUT
} from "../../Actions/LogoutActions";

import {
    GETTING_USER_INFO,
    GOT_USER_INFO_SUCCESS
} from '../../Actions/AccountActions';

import {
    SELECT_FILE,
    AVATAR_UPLOADED,
    AVATAR_UPLOADING,
    AVATAR_UPLOAD_ERROR
} from '../../Actions/MediaUploadActions';



const initialState = {
    userName: '',
    password: '',
    verifyPassword: '',
    logingin: false,
    loggedin: false,
    login_error: false,
    errors: {},
    data: null,

    avatarUploading: false,
    avatarUploaded: false,
    avatarUploadError: false,

    selectedFile: null
};

export const LoginReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case SELECT_FILE:
            return {
                ...state,
                selectedFile: payload
            }
        case AVATAR_UPLOADING:
            return {
                ...state,
                avatarUploading: true,
                avatarUploaded: false,
                avatarUploadError: false
            }
        case AVATAR_UPLOADED:
            return {
                ...state,
                avatarUploading: false,
                avatarUploaded: true,
                avatarUploadError: false,
                data: {
                    ...state.data,
                    avatar: payload
                }
            }
        case AVATAR_UPLOAD_ERROR:
            return {
                ...state,
                avatarUploading: false,
                avatarUploaded: false,
                avatarUploadError: true,
                errors: {
                    ...state.errors,
                    [payload.errorName]: payload.message,
                },
            }

        case SET_USERNAME:
          return {
            ...state,
            userName: payload
          };

        case SET_PASSWORD:
          return {
            ...state,
            password: payload
          };
        case SET_VERIFY_PASSWORD:
            return {
                ...state,
                verifyPassword: payload
            };

        case GETTING_USER_INFO:
        case LOGINGIN:
            return {
                ...state,
                logingin: true,
            };
        
        case LOGGEDIN:
            return {
                ...state,
                logingin: false,
                loggedin: true,
                data: payload,
            };
        
        case GOT_USER_INFO_SUCCESS:
            return {
                ...state,
                logingin: false,
                loggedin: true,
                data: payload,
            };

        case SET_LOGIN_ERROR:
            return {
                ...state,
                logingin: false,
                login_error: true,
                errors: {
                    ...state.errors,
                    [payload.errorName]: payload.message,
                },
            };

        case RESET_ERRORS:
            return {
                ...state,
                login_error: false,
                errors: {},
            };

        case RESET_INPUT:
            return {
                ...state,
                userName: '',
                password: '',
                verifyPassword: ''
            };

        case LOGGED_OUT:
            return {
              ...state,
              userName: '',
              password: '',
              verifyPassword: '',
              logingin: false,
              loggedin: false,
              login_error: false,
              errors: {},
              data: null
            }

        default:
            return {
                ...state,
            };
    }
};

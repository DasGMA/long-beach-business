import {
    REGISTERING,
    REGISTERED,
    REGISTER_ERROR,
    SET_ACCOUNT_TYPE,
    SET_EMAIL,
    SET_FIRSTNAME,
    SET_LASTNAME,
    SET_PASSWORD,
    SET_REGISTER_ERROR,
    SET_USERNAME,
    CLEAR_ERRORS,
    CLEAR_INPUT
} from "../../Actions/RegisterActions";


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userName: '',
    accountType: 'none',
    registering: false,
    registered: false,
    errors: {}
}

export const RegisterReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case REGISTERING:
            return {
                ...state,
                registering: true
            }
        case REGISTERED:
            return {
                ...state,
                registering: false,
                registered: true,
                data: payload
            }
        case REGISTER_ERROR:
            return {
                ...state,
                rgistering: false,
                register_error: true,
                error: payload
            }
        case SET_ACCOUNT_TYPE:
            return {
                ...state,
                accountType: payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: payload
            }
        case SET_FIRSTNAME:
            return {
                ...state,
                firstName: payload
            }
        case SET_LASTNAME:
            return {
                ...state,
                lastName: payload
            }
        case SET_PASSWORD:
            return {
                ...state,
                password: payload
            }
        case SET_USERNAME:
            return {
                ...state,
                userName: payload
            }
        case SET_REGISTER_ERROR:
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [payload.errorName]: payload.message
                }
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: {}
            }
        case CLEAR_INPUT:
            return {
                ...state,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                userName: '',
                accountType: 'none'
            }
        default:
            return {
                ...state
            }
    }
}
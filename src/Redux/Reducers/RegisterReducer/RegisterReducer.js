import {
    REGISTERING,
    REGISTERED,
    REGISTER_ERROR
} from "../../Actions/RegisterActions";


const initialState = {
    registering: false,
    registered: false,
    register_error: false,
    error: null,
    data: null
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
        default:
            return {
                ...state
            }
    }
}
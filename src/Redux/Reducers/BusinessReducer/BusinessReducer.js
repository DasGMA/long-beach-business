import {
    GETTING_BUSINESSES_ERROR,
    GETTING_BUSSINESES,
    GOT_BUSINESSES,
    SELECT_BUSINESS
} from '../../Actions/BusinessActions'

const initialState = {
    gettingBusinesses: false,
    gotBusinesses: false,
    gettingBusinessesError: false,

    errors: [],
    businesses: [],

    selectedBusiness: null
}

export const BusinessReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch(type) {
        case GETTING_BUSSINESES:
            return {
                ...state,
                gettingBusinesses: true,
                gotBusinesses: false,
                gettingBusinessesError: false
            }
        case GOT_BUSINESSES:
            return {
                ...state,
                gettingBusinesses: false,
                gotBusinesses: true,
                gettingBusinessesError: false,
                businesses: payload
            }
        case GETTING_BUSINESSES_ERROR:
            return {
                ...state,
                gettingBusinesses: false,
                gotBusinesses: false,
                gettingBusinessesError: true,
                errros: [...state.errors, payload]
            }
        case SELECT_BUSINESS:
            return {
                ...state,
                selectedBusiness: payload
            }
        default:
            return {
                ...state
            }
    }
}
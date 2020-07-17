import {
    CATEGORIES_ERROR,
    CATEGORIES_PENDING,
    CATEGORIES_SUCCESS,
    GETTING_BUSINESS_LIST,
    GOT_BUSINESS_LIST,
    RESET_GOT_BUSINESS_LIST
} from '../../Actions/CategoriesActions';

const initialState = {
    categoriesPending: false,
    categoriesSuccess: false,
    categoriesError: false,
    categories: [],

    gettingBusinessList: false,
    gotBusinessList: false,
    errors: {},
    updated: false,
    
    businesses: null
}

export const CategoriesReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case CATEGORIES_PENDING:
            return {
                ...state,
                categoriesPending: true,
                categoriesSuccess: false,
                categoriesError: false
            };

        case CATEGORIES_SUCCESS:
            return {
                ...state,
                categoriesPending: false,
                categoriesSuccess: true,
                categoriesError: false,
                categories: payload,
                updated: false
            };

        case GETTING_BUSINESS_LIST:
            return {
                ...state,
                gettingBusinessList: true,
                gotBusinessList: false,
                categoriesError: false
            };

        case GOT_BUSINESS_LIST:
            return {
                ...state,
                gettingBusinessList: false,
                gotBusinessList: true,
                businesses: payload
            };

        case RESET_GOT_BUSINESS_LIST:
            return {
                ...state,
                gotBusinessList: false
            };

        case CATEGORIES_ERROR:
            return {
                ...state,
                categoriesPending: false,
                categoriesSuccess: false,
                gettingBusinessList: false,
                gotBusinessList: true,
                categoriesError: true
            };
        default:
            return {
                ...state
            }
    }
}
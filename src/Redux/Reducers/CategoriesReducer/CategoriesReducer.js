import {
    CATEGORIES_ERROR,
    CATEGORIES_PENDING,
    CATEGORIES_SUCCESS
} from '../../Actions/CategoriesActions';

const initialState = {
    categoriesPending: false,
    categoriesSuccess: false,
    categoriesError: false,
    errors: {},
    categories: []
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
                categories: payload
            };

        case CATEGORIES_ERROR:
            return {
                ...state,
                categoriesPending: false,
                categoriesSuccess: false,
                categoriesError: true
            };
        default:
            return {
                ...state
            }
    }
}
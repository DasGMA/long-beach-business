import {
    CATEGORIES_ERROR,
    CATEGORIES_PENDING,
    CATEGORIES_SUCCESS,
    GETTING_BUSINESS_LIST,
    GOT_BUSINESS_LIST,
    RESET_GOT_BUSINESS_LIST,
    SELECT_CATEGORY
} from '../../Actions/CategoriesActions';

import {
    ADMIN_DELETED_CATEGORY,
    ADMIN_DELETE_CATEGORY_ERROR,
    ADMIN_DELETING_CATEGORY,
    ADMIN_EDITED_CATEGORY,
    ADMIN_EDITING_CATEGORY,
    ADMIN_EDIT_CATEGORY_ERROR,
    ADMIN_POSTED_CATEGORY,
    ADMIN_POSTING_CATEGORY,
    ADMIN_POSTING_CATEGORY_ERROR,
    NEW_CATEGORY_NAME,
    NEW_CATEGORY_DESCRIPTION,
    CLEAR_NEW_CATEGORY,
    SELECT_FILE
} from '../../Actions/AdminActions';

const initialState = {
    adminPostingCategory: false,
    adminPostedCategory: false,

    adminEditedCategory: false,
    adminEditingCategory: false,

    adminDeletingCategory: false,
    adminDeletedCategory: false,

    adminErrors: {},
    adminError: false,

    categoriesPending: false,
    categoriesSuccess: false,
    categoriesError: false,
    categories: [],

    gettingBusinessList: false,
    gotBusinessList: false,
    errors: {},
    updated: false,

    categoryImageUploading: false,
    categoryImageUploaded: false,
    categoryImageUploadError: false,
    categoryImage: null,
    
    businesses: null,

    selectedCategory: null,
    selectedFile: null,

    newCategory: {
        categoryName: '',
        categoryDescription: ''
    }
}

export const CategoriesReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {

        case SELECT_FILE:
            return {
                ...state,
                selectedFile: payload
            }

        case NEW_CATEGORY_NAME:
            return {
                ...state,
                newCategory: {
                    ...state.newCategory, categoryName: payload
                }
            }
        case NEW_CATEGORY_DESCRIPTION:
            return {
                ...state,
                newCategory: {
                    ...state.newCategory, categoryDescription: payload
                }
            }
        case CLEAR_NEW_CATEGORY:
            return {
                ...state,
                newCategory: payload
            }
        case ADMIN_POSTING_CATEGORY:
            return {
                ...state,
                adminPostingCategory: true,
                adminPostedCategory: false,
            }
        case ADMIN_POSTED_CATEGORY:
            return {
                ...state,
                adminPostingCategory: false,
                adminPostedCategory: false,
                categories: [...state.categories, payload]
            }
        
        case ADMIN_DELETING_CATEGORY:
            return {
                ...state,
                adminDeletingCategory: true,
                adminDeletedCategory: false,
            }
        case ADMIN_DELETED_CATEGORY:
            return {
                ...state,
                adminDeletingCategory: true,
                adminDeletedCategory: false,
                categories: payload
            }

        case ADMIN_EDITING_CATEGORY:
            return {
                ...state,
                adminEditedCategory: false,
                adminEditingCategory: true,
            }
        case ADMIN_EDITED_CATEGORY:
            return {
                ...state,
                adminEditedCategory: true,
                adminEditingCategory: false,
                categories: payload
            }
        case ADMIN_POSTING_CATEGORY_ERROR:
        case ADMIN_EDIT_CATEGORY_ERROR:
        case ADMIN_DELETE_CATEGORY_ERROR:
            return {
                ...state,
                adminError: true,
                adminErrors: payload,

                adminPostingCategory: false,
                adminPostedCategory: false,
            
                adminEditingCategory: false,
                adminEditedCategory: false,
            
                adminDeleteCategory: false,
                adminDeletedCategory: false,
            }

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

        case SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: payload
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
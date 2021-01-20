import {
    GETTING_BUSINESSES_ERROR,
    GETTING_BUSSINESES,
    GOT_BUSINESSES,
    SELECT_BUSINESS,
    DELETED_BUSINESS,
    DELETE_BUSINESS_ERROR,
    DELETING_BUSINESS,
    POSTING_BUSINESS,
    POSTING_BUSINESS_ERROR,
    POSTING_BUSINESS_SUCCESS,
    HANDLE_NEW_BUSINESS_CHANGE,
    CLEAR_NEW_BUSINESS,
    SET_NEW_BUSINESS,
    UPDATED_BUSINESS,
    UPDATE_BUSINESS_ERROR,
    UPDATING_BUSINESS,
    REMOVE_BUSINESS_IMAGE
} from '../../Actions/BusinessActions'

const initialState = {
    gettingBusinesses: false,
    gotBusinesses: false,
    gettingBusinessesError: false,

    postingBusiness: false,
    postingBusinessSuccess: false,
    postingBusinessError: false,

    deletingBusiness: false,
    deletedBusiness: false,
    deleteBusinessError: false,

    updatingBusiness: false,
    updatedBusiness: false,
    updateBusinessError: false,

    errors: [],
    businesses: [],

    selectedBusiness: null,
    selectedBusinessFiles: null,

    newBusiness: {
        category: '',
        businessName: '',
        businessDescription: '',
        postedBy: '',
        streetApartmentNumber: '',
        businessImages: null,
        streetName: '',
        country: 'usa',
        state: 'california',
        city: 'long beach',
        zip: '',
        phoneNumber: '',
        businessEmail: ''
    }
}

export const BusinessReducer = (state = initialState, action) => {
    const { payload, type } = action;
   
    switch(type) {
        case SET_NEW_BUSINESS:
            return {
                ...state,
                newBusiness: payload
            }
        case REMOVE_BUSINESS_IMAGE: 
            return {
                ...state,
                newBusiness: {
                    ...state.newBusiness,
                    businessImages: payload
                }
            }
        case HANDLE_NEW_BUSINESS_CHANGE:
            return {
                ...state,
                newBusiness: payload
            }
        case CLEAR_NEW_BUSINESS:
            return {
                ...state,
                newBusiness: payload
            }
        case POSTING_BUSINESS:
            return {
                ...state,
                postingBusiness: true
            }
        case POSTING_BUSINESS_SUCCESS:
            return {
                ...state,
                postingBusiness: false,
                postingBusinessSuccess: true,
                postingBusinessError: false,
                businesses: payload
            }
        case POSTING_BUSINESS_ERROR:
            return {
                ...state,
                postingBusiness: false,
                postingBusinessSuccess: false,
                postingBusinessError: true,
                errors: [...state.errors, payload]
            }
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
                errors: [...state.errors, payload]
            }
        case UPDATING_BUSINESS:
            return {
                ...state,
                updatingBusiness: true,
                updatedBusiness: false,
                updateBusinessError: false,
            }
        case UPDATED_BUSINESS:
            return {
                ...state,
                updatingBusiness: false,
                updatedBusiness: true,
                updateBusinessError: false,
                businesses: payload
            }
        case UPDATE_BUSINESS_ERROR:
            return {
                ...state,
                updatingBusiness: false,
                updatedBusiness: false,
                updateBusinessError: true,
                errors: [...state.errors, payload]
            }
        case SELECT_BUSINESS:
            return {
                ...state,
                selectedBusiness: payload
            }
        case DELETING_BUSINESS:
            return {
                ...state,
                deletingBusiness: true,
                deletedBusiness: false,
                deleteBusinessError: false
            }
        case DELETED_BUSINESS:
            return {
                ...state,
                deletingBusiness: false,
                deletedBusiness: true,
                deleteBusinessError: false,
                businesses: payload
            }
        case DELETE_BUSINESS_ERROR:
            return {
                ...state,
                deletingBusiness: false,
                deletedBusiness: false,
                deleteBusinessError: true,
                errors: [...state.errors, payload]
            }
        default:
            return {
                ...state
            }
    }
}
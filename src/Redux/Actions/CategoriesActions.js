import Axios from "axios";

export const CATEGORIES_PENDING = 'CATEGORIES_PENDING';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR';
export const GETTING_BUSINESS_LIST = 'GETTING_BUSINESS_LIST';
export const GOT_BUSINESS_LIST = 'GOT_BUSINESS_LIST';
export const RESET_GOT_BUSINESS_LIST = "RESET_GOT_BUSINESS_LIST";

const url = 'http://localhost:8888/';

export const getCategories = () => async dispatch => {
    dispatch({type: CATEGORIES_PENDING});

    try {
        const categories = await Axios.get(`${url}categories`);
        dispatch({
            type: CATEGORIES_SUCCESS,
            payload: categories.data
        });
    } catch (error) {
        dispatch({
            type: CATEGORIES_ERROR
        })
    }
}

export const getCategoryBusinessList = (category, _id) => async dispatch => {
    dispatch({type: GETTING_BUSINESS_LIST});
    const params = { 
        params: {
            name: category,
            _id
        }
     };

    try {
        const businesses = await Axios.get(`${url}category`, params);
        
        dispatch({
            type: GOT_BUSINESS_LIST,
            payload: businesses.data
        });
    } catch (error) {
        dispatch({
            type: CATEGORIES_ERROR
        });
    }
}

export const resetGotBusinessList = () => dispatch => {
    dispatch({
        type: RESET_GOT_BUSINESS_LIST
    });
}
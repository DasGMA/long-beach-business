import Axios from "axios";

export const CATEGORIES_PENDING = 'CATEGORIES_PENDING';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR';

const url = 'http://localhost:8888/categories';

export const getCategories = () => async dispatch => {
    dispatch({type: CATEGORIES_PENDING});

    try {
        const categories = await Axios.get(url);
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
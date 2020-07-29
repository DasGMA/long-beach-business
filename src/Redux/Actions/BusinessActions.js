import axios from 'axios';

export const GETTING_BUSSINESES = 'GETTING_BUSSINESES';
export const GOT_BUSINESSES = 'GOT_BUSINESSES';
export const GETTING_BUSINESSES_ERROR = 'GETTING_BUSINESSES_ERROR';
export const SELECT_BUSINESS = 'SELECT_BUSINESS';

const url = 'http://localhost:8888/';

export const getAllBusinesses = () => async dispatch => {
    dispatch({
        type: GETTING_BUSSINESES
    });

    try {
        const businesses = await axios.get(`${url}businesses`);

        dispatch({
            type: GOT_BUSINESSES,
            payload: businesses.data
        });

    } catch (error) {
        dispatch({
            type: GETTING_BUSINESSES_ERROR,
            payload: error
        });
    }
}

export const selectBusiness = (business) => dispatch => {
    dispatch({
        type: SELECT_BUSINESS,
        payload: business
    });
}
import axios from 'axios';

export const GETTING_BUSSINESES = 'GETTING_BUSSINESES';
export const GOT_BUSINESSES = 'GOT_BUSINESSES';
export const GETTING_BUSINESSES_ERROR = 'GETTING_BUSINESSES_ERROR';
export const SELECT_BUSINESS = 'SELECT_BUSINESS';
export const DELETING_BUSINESS = 'DELETING_BUSINESS';
export const DELETED_BUSINESS = 'DELETED_BUSINESS';
export const DELETE_BUSINESS_ERROR = 'DELETE_BUSINESS_ERROR';

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

export const deleteBusiness = ({ _id, postedBy }) => async (dispatch, getState) => {
    const { businesses } = getState().BusinessReducer;
    console.log({_id, postedBy})
    dispatch({
        type: DELETING_BUSINESS
    });

    try {
        const token = localStorage.getItem('Token');
        const headers = {headers: {'authorization': token}};
        const data = { _id, postedBy };
        const deletedBusiness = await axios.post(`${url}delete-business`, data, headers);
        
        const filtered = businesses.filter(business => business._id !== deletedBusiness.data._id);
        
        dispatch({
            type: DELETED_BUSINESS,
            payload: filtered
        });

    } catch (error) {
        dispatch({
            type: DELETE_BUSINESS_ERROR,
            payload: error
        });
    }
}

export const updateBusiness = () => async (dispatch, getState) => {

}
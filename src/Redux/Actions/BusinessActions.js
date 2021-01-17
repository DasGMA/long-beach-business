import axios from "axios";

export const GETTING_BUSSINESES = "GETTING_BUSSINESES";
export const GOT_BUSINESSES = "GOT_BUSINESSES";
export const GETTING_BUSINESSES_ERROR = "GETTING_BUSINESSES_ERROR";
export const SELECT_BUSINESS = "SELECT_BUSINESS";
export const DELETING_BUSINESS = "DELETING_BUSINESS";
export const DELETED_BUSINESS = "DELETED_BUSINESS";
export const DELETE_BUSINESS_ERROR = "DELETE_BUSINESS_ERROR";
export const UPDATING_BUSINESS = 'UPDATING_BUSINESS';
export const UPDATED_BUSINESS = 'UPDATED_BUSINESS';
export const UPDATE_BUSINESS_ERROR = 'UPDATE_BUSINESS_ERROR';
export const POSTING_BUSINESS = 'POSTING_BUSINESS';
export const POSTING_BUSINESS_SUCCESS = 'POSTING_BUSINESS_SUCCESS';
export const POSTING_BUSINESS_ERROR = 'POSTING_BUSIMESS_ERROR';
export const HANDLE_NEW_BUSINESS_CHANGE = 'HANDLE_NEW_BUSINESS_CHANGE';
export const CLEAR_NEW_BUSINESS = 'CLEAR_NEW_BUSINESS';
export const SET_NEW_BUSINESS = 'SET_NEW_BUSINESS';


const url = process.env.REACT_APP_BASE_URL;

export const getAllBusinesses = () => async (dispatch) => {
    dispatch({
        type: GETTING_BUSSINESES,
    });

    try {
        const businesses = await axios.get(`${url}businesses`);

        dispatch({
            type: GOT_BUSINESSES,
            payload: businesses.data,
        });
    } catch (error) {
        dispatch({
            type: GETTING_BUSINESSES_ERROR,
            payload: error,
        });
    }
};

export const selectBusiness = (business) => (dispatch) => {
    dispatch({
        type: SELECT_BUSINESS,
        payload: business,
    });
};

export const postBusiness = () => async (dispatch, getState) => {
    const { newBusiness, businesses } = getState().BusinessReducer;
    const user = getState().LoginReducer.data;
    newBusiness.postedBy = user._id;

    dispatch({
        type: POSTING_BUSINESS
    });

    try {
        const token = localStorage.getItem('Token');
        const headers = { headers: { 'authorization': token } };
        const postedNewBusiness = await axios.post(`${url}post-business`, newBusiness, headers);
        const newB = postedNewBusiness.data;
        const payload = [ ...businesses, newB ];
    
        dispatch({
            type: POSTING_BUSINESS_SUCCESS,
            payload
        });

    } catch (error) {
        dispatch({
            type: POSTING_BUSINESS_ERROR,
            payload: error
        });
    }
};

export const deleteBusiness = ({ _id, postedBy, categoryID }) => async (dispatch, getState) => {
    const { businesses } = getState().BusinessReducer;
    dispatch({
        type: DELETING_BUSINESS,
    });

    try {
        const token = localStorage.getItem("Token");
        const config = { headers: { 'authorization': token }, data: { _id, postedBy, categoryID } };
        const deletedBusiness = await axios.delete(`${url}delete-business`, config);

        const payload = businesses.filter(
            (business) => business._id !== deletedBusiness.data._id
        );

        dispatch({
            type: DELETED_BUSINESS,
            payload
        });
    } catch (error) {
        dispatch({
            type: DELETE_BUSINESS_ERROR,
            payload: error
        });
    }
};

export const updateBusiness = () => async (dispatch, getState) => {
    const { newBusiness, businesses } = getState().BusinessReducer;
    
    dispatch({
        type: UPDATING_BUSINESS
    });
    
    try {
        const token = localStorage.getItem("Token");
        const headers = { headers: { authorization: token } };
        const updatedBusiness = await axios.post(`${url}edit-business`, newBusiness, headers);
        const payload = businesses.reduce((newArr, business) => {
            if (business._id === updatedBusiness.data._id) {
                newArr.push(updatedBusiness.data);
            } else {
                newArr.push(business);
            }
        
            return newArr;
        }, []);

        console.log(payload)

        dispatch({
            type: UPDATED_BUSINESS,
            payload
        });

    } catch (error) {
        dispatch({
            type: UPDATE_BUSINESS_ERROR,
            payload: error
        });
    }
};

export const handleNewBusinessChange = (event) => (dispatch, getState) => {
    event.preventDefault();
    const { newBusiness } = getState().BusinessReducer;
    const { name, value } = event.target;
    const payload = { ...newBusiness, [name]: value };

    dispatch({
        type: HANDLE_NEW_BUSINESS_CHANGE,
        payload
    });
};

export const setNewBusiness = (item) => dispatch => {
    dispatch({
        type: SET_NEW_BUSINESS,
        payload: item
    });
};

export const clearNewBusiness = () => dispatch => {
    const payload = {
        category: '',
        businessName: '',
        businessDescription: '',
        postedBy: '',
        streetApartmentNumber: '',
        streetName: '',
        country: 'usa',
        state: 'california',
        city: 'long beach',
        zip: '',
        phoneNumber: '',
        businessEmail: ''
    };

    dispatch({
        type: CLEAR_NEW_BUSINESS,
        payload
    })

}
import {
    SET_RATING
} from '../../Actions/RatingActions';

const initialState = {
    rating: 0
}

export const RatingReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_RATING:
            return {
                ...state,
                rating: payload
            }
        default:
            return state;
    }
}
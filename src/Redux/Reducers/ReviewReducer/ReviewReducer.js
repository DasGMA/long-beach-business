import {
    HANDLE_REVIEW_CHANGE,
    CLEAR_REVIEW,
    SELECT_FOR_REVIEW
} from '../../Actions/ReviewActions';


const initialState = {
    review: {
        title: '',
        content: '',
        rating: 0
    },
    postingReview: false,
    postedReview: false,
    postingReviewError: false,
    error: null,

    selectedForReview: null
}

export const ReviewReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case HANDLE_REVIEW_CHANGE:
            return {
                ...state,
                review: payload
            }
        case SELECT_FOR_REVIEW:
            return {
                ...state,
                selectedForReview: payload
            }
        case CLEAR_REVIEW:
            return initialState
        default:
            return state
    }
}
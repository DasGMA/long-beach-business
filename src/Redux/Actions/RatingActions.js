export const SET_RATING = 'SET_RATING';

export const setRating = (rating) => dispatch => {
    dispatch({
        type: SET_RATING,
        payload: rating
    })
}
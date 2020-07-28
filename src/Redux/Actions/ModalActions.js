export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const toggleModal = (type) => dispatch => {
    dispatch({
        type: TOGGLE_MODAL,
        payload: type
    });
};
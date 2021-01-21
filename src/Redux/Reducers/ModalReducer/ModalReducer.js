import {
    TOGGLE_MODAL
} from '../../Actions/ModalActions';

const initialState = {
    visible: false,
    formType: '',
    selected: {}
}

export const ModalReducer = (state = initialState, action) => {
    const { payload, type } = action;

    switch(type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                visible: !state.visible,
                formType: payload
            }
        
        default:
            return state
    }
}
import {
    SELECT_FILE,
    AVATAR_UPLOADED,
    AVATAR_UPLOADING,
    AVATAR_UPLOAD_ERROR
} from '../../Actions/MediaUploadActions';


const initialState = {
    avatarUploading: false,
    avatarUploaded: false,
    avatarUploadError: false,

    errors: null,

    selectedFile: null,
    avatar: {}
}

export const mediaReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SELECT_FILE:
            return {
                ...state,
                selectedFile: payload
            }
        case AVATAR_UPLOADING:
            return {
                ...state,
                avatarUploading: true,
                avatarUploaded: false,
                avatarUploadError: false
            }
        case AVATAR_UPLOADED:
            return {
                ...state,
                avatarUploading: false,
                avatarUploaded: true,
                avatarUploadError: false,
                avatar: payload
            }
        case AVATAR_UPLOAD_ERROR:
            return {
                ...state,
                avatarUploading: false,
                avatarUploaded: false,
                avatarUploadError: true,
                errors: payload
            }
        default:
            return {
                ...state
            }
    }
}
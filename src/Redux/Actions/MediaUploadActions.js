import Axios from "axios";

export const AVATAR_UPLOADING = 'AVATAR_UPLOADING';
export const AVATAR_UPLOADED = 'AVATAR_UPLOADED';
export const AVATAR_UPLOAD_ERROR = 'AVATAR_UPLOAD_ERROR';
export const SELECT_FILE = 'SELECT_FILE';

const url = 'http://localhost:8888/';

export const selectFile = (file) => dispatch => {
    dispatch({
        type: SELECT_FILE,
        payload: file
    });
};

export const handleMediaFileChange = (event) => dispatch => {
    event.preventDefault();
    dispatch(selectFile(event.target.files[0]));
}

export const avatarUpload = () => async (dispatch, getState) => {
    dispatch({
        type: AVATAR_UPLOADING
    });
    const userid = getState().LoginReducer.data._id;
    const file = getState().LoginReducer.selectedFile;

    const token = localStorage.getItem('Token');
    const data = new FormData();
    data.append('userid', userid);
    data.append('image', file);

    const config = { headers: {   'Content-Type': 'multipart/form-data', authorization: token}};

    try {
        const avatar = await Axios.post(`${url}avatar-upload`, data, config);
        dispatch({
            type: AVATAR_UPLOADED,
            payload: avatar.data
        });
        dispatch(selectFile(null));
    } catch (error) {
        dispatch(selectFile(null));
        dispatch({
            type: AVATAR_UPLOAD_ERROR,
            payload: error
        });
    }
}
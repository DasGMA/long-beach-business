import axiosInstance from "../../../Interceptors/interceptors";

export const AVATAR_UPLOADING = "AVATAR_UPLOADING";
export const AVATAR_UPLOADED = "AVATAR_UPLOADED";
export const AVATAR_UPLOAD_ERROR = "AVATAR_UPLOAD_ERROR";
export const CATEGORY_IMAGE_UPLOADING = "CATEGORY_IMAGE_UPLOADING";
export const CATEGORY_IMAGE_UPLOADED = "CATEGORY_IMAGE_UPLOADED";
export const CATEGORY_IMAGE_UPLOAD_ERROR = "CATEGORY_IMAGE_UPLOAD_ERROR";
export const SELECT_FILE = "SELECT_FILE";
export const SELECT_CATEGORY_ID = "SELECT_CATEGORY_ID";

export const selectFile = (file) => (dispatch) => {
  dispatch({
    type: SELECT_FILE,
    payload: file,
  });
};

export const handleMediaFileChange = (event) => (dispatch) => {
  event.preventDefault();
  dispatch(selectFile(event.target.files[0]));
};

export const avatarUpload = () => async (dispatch, getState) => {
  dispatch({
    type: AVATAR_UPLOADING,
  });
  const userid = getState().LoginReducer.data._id;
  const file = getState().LoginReducer.selectedFile;

  const data = new FormData();
  data.append("userid", userid);
  data.append("image", file);

  try {
    const avatar = await axiosInstance.post(`/avatar-upload`, data);
    dispatch({
      type: AVATAR_UPLOADED,
      payload: avatar.data,
    });
    dispatch(selectFile(null));
  } catch (error) {
    dispatch(selectFile(null));
    dispatch({
      type: AVATAR_UPLOAD_ERROR,
      payload: error,
    });
  }
};

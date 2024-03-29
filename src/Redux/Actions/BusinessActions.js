import axiosInstance from "../../../Interceptors/interceptors";

export const GETTING_BUSSINESES = "GETTING_BUSSINESES";
export const GOT_BUSINESSES = "GOT_BUSINESSES";
export const GETTING_BUSINESSES_ERROR = "GETTING_BUSINESSES_ERROR";
export const GETTING_BUSINESS = "GETTING_BUSSINESS";
export const GOT_BUSINESS = "GOT_BUSINESS";
export const GETTING_BUSINESS_ERROR = "GETTING_BUSINESS_ERROR";
export const SELECT_BUSINESS = "SELECT_BUSINESS";
export const DELETING_BUSINESS = "DELETING_BUSINESS";
export const DELETED_BUSINESS = "DELETED_BUSINESS";
export const DELETE_BUSINESS_ERROR = "DELETE_BUSINESS_ERROR";
export const UPDATING_BUSINESS = "UPDATING_BUSINESS";
export const UPDATED_BUSINESS = "UPDATED_BUSINESS";
export const UPDATE_BUSINESS_ERROR = "UPDATE_BUSINESS_ERROR";
export const POSTING_BUSINESS = "POSTING_BUSINESS";
export const POSTING_BUSINESS_SUCCESS = "POSTING_BUSINESS_SUCCESS";
export const POSTING_BUSINESS_ERROR = "POSTING_BUSIMESS_ERROR";
export const HANDLE_NEW_BUSINESS_CHANGE = "HANDLE_NEW_BUSINESS_CHANGE";
export const CLEAR_NEW_BUSINESS = "CLEAR_NEW_BUSINESS";
export const SET_NEW_BUSINESS = "SET_NEW_BUSINESS";
export const REMOVE_BUSINESS_IMAGE = "REMOVE_BUSINESS_IMAGE";
export const FILES_TO_DELETE = "FILES_TO_DELETE";
export const FILES_TO_UPLOAD = "FILES_TO_UPLOAD";

export const getAllBusinesses = () => async (dispatch) => {
  dispatch({
    type: GETTING_BUSSINESES,
  });

  try {
    const businesses = await axiosInstance.get(`/businesses`);

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

export const getBusiness = (_id) => async (dispatch) => {
  const params = {
    params: { _id },
  };

  dispatch({
    type: GETTING_BUSINESS,
  });
  try {
    const { data } = await axiosInstance.get(`/business`, params);

    dispatch({
      type: GOT_BUSINESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GETTING_BUSINESS_ERROR,
      payload: error,
    });
  }
};

export const removeBusinessImage = (index) => (dispatch, getState) => {
  const { newBusiness, filesToUpload } = getState().BusinessReducer;
  let removeToUploadFiles = [];

  if (newBusiness.businessImages.images[index].hasOwnProperty("location")) {
    dispatch(toDeleteFiles(newBusiness.businessImages.images[index]));
  } else {
    removeToUploadFiles = filesToUpload.filter(
      (file, i) => filesToUpload[i].name !== file.name,
    );
  }

  let payload = newBusiness.businessImages.images.filter(
    (item) => newBusiness.businessImages.images.indexOf(item) !== index,
  );

  dispatch({
    type: REMOVE_BUSINESS_IMAGE,
    payload: {
      removeBusinessIMG: payload.length === 0 ? null : payload,
      removeToUploadFILES:
        removeToUploadFiles.length === 0 ? null : removeToUploadFiles,
    },
  });
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
    type: POSTING_BUSINESS,
  });

  try {
    const form = new FormData();

    const postedNewBusiness = await axiosInstance.post(
      `/post-business`,
      newBusiness,
    );

    form.append("businessid", postedNewBusiness.data._id);
    for (const file of newBusiness.businessImages.images) {
      form.append("images", file);
    }
    const uploadedImages = await axiosInstance.post(
      `/upload-multiple-files`,
      form,
    );
    postedNewBusiness.data.businessImages = {};
    postedNewBusiness.data.businessImages.images = uploadedImages.data;

    const payload = [...businesses, postedNewBusiness.data];

    dispatch({
      type: POSTING_BUSINESS_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: POSTING_BUSINESS_ERROR,
      payload: error,
    });
  }
};

export const deleteBusiness =
  ({ _id, postedBy, categoryID, images }) =>
  async (dispatch, getState) => {
    const { businesses } = getState().BusinessReducer;
    dispatch({
      type: DELETING_BUSINESS,
    });

    try {
      const deletedBusiness = await axiosInstance.delete(
        `${url}delete-business`,
      );

      images.length !== 0 &&
        (await axiosInstance.post(`/delete-multi-files`, { images }));

      const payload = businesses.filter(
        (business) => business._id !== deletedBusiness.data._id,
      );

      dispatch({
        type: DELETED_BUSINESS,
        payload,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BUSINESS_ERROR,
        payload: error,
      });
    }
  };

export const updateBusiness = () => async (dispatch, getState) => {
  const { newBusiness, businesses, filesToUpload, filesToDelete } =
    getState().BusinessReducer;

  dispatch({
    type: UPDATING_BUSINESS,
  });

  try {
    // Upload new business images
    if (filesToUpload !== null) {
      const uploadForm = new FormData();
      uploadForm.append("businessid", newBusiness._id);
      for (const file of filesToUpload) {
        uploadForm.append("images", file);
      }

      await axiosInstance.post(`/upload-multiple-files`, uploadForm);
    }

    // Delete business images
    if (filesToDelete !== null) {
      await axiosInstance.post(`/delete-multi-files`, {
        images: filesToDelete,
        businessid: newBusiness._id,
      });
    }

    const updatedBusiness = await axiosInstance.post(
      `/edit-business`,
      newBusiness,
    );
    const payload = businesses.reduce((newArr, business) => {
      if (business._id === updatedBusiness.data._id) {
        newArr.push(updatedBusiness.data);
      } else {
        newArr.push(business);
      }

      return newArr;
    }, []);

    dispatch({
      type: UPDATED_BUSINESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BUSINESS_ERROR,
      payload: error,
    });
  }
};

export const handleNewBusinessChange = (event) => (dispatch, getState) => {
  event.preventDefault();
  const { newBusiness } = getState().BusinessReducer;
  const { name, value, files } = event.target;
  let payload = {};

  if (name === "businessImages") {
    dispatch(toUploadFiles(files));
    newBusiness.businessImages.images === null
      ? (payload = {
          ...newBusiness,
          [name]: {
            images: [...files],
          },
        })
      : (payload = {
          ...newBusiness,
          [name]: {
            ...newBusiness[name],
            images: [...newBusiness[name].images, ...files],
          },
        });
  } else {
    payload = { ...newBusiness, [name]: value };
  }

  dispatch({
    type: HANDLE_NEW_BUSINESS_CHANGE,
    payload,
  });
};

export const setNewBusiness = (item) => (dispatch) => {
  dispatch({
    type: SET_NEW_BUSINESS,
    payload: item,
  });
};

export const clearNewBusiness = () => (dispatch) => {
  const payload = {
    category: "",
    businessName: "",
    businessDescription: "",
    postedBy: "",
    streetApartmentNumber: "",
    streetName: "",
    businessImages: {
      images: null,
    },
    country: "usa",
    state: "california",
    city: "long beach",
    zip: "",
    phoneNumber: "",
    businessEmail: "",
  };

  dispatch({
    type: CLEAR_NEW_BUSINESS,
    payload,
  });
};

export const toDeleteFiles = (file) => (dispatch, getState) => {
  const { filesToDelete } = getState().BusinessReducer;
  let payload;
  filesToDelete === null
    ? (payload = file === null ? null : [file])
    : (payload = file === null ? null : [...filesToDelete, file]);

  dispatch({
    type: FILES_TO_DELETE,
    payload,
  });
};

export const toUploadFiles = (files) => (dispatch, getState) => {
  const { filesToUpload } = getState().BusinessReducer;
  let payload;
  filesToUpload === null
    ? (payload = files === null ? null : [...files])
    : (payload = files === null ? null : [...filesToUpload, ...files]);

  dispatch({
    type: FILES_TO_UPLOAD,
    payload,
  });
};

import axiosInstance from "../../../Interceptors/interceptors";

export const CATEGORIES_PENDING = "CATEGORIES_PENDING";
export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";
export const CATEGORIES_ERROR = "CATEGORIES_ERROR";
export const GETTING_BUSINESS_LIST = "GETTING_BUSINESS_LIST";
export const GOT_BUSINESS_LIST = "GOT_BUSINESS_LIST";
export const RESET_GOT_BUSINESS_LIST = "RESET_GOT_BUSINESS_LIST";
export const SELECT_CATEGORY = "SELECT_CATEGORY";

export const getCategories = () => async (dispatch) => {
  dispatch({ type: CATEGORIES_PENDING });

  try {
    const categories = await axiosInstance.get(`/categories`);
    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: categories.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
    });
  }
};

export const getCategoryBusinessList = (_id) => async (dispatch) => {
  dispatch({ type: GETTING_BUSINESS_LIST });

  const params = {
    params: { _id },
  };

  try {
    const businesses = await axiosInstance.get(
      `/category-business-list`,
      params,
    );

    dispatch({
      type: GOT_BUSINESS_LIST,
      payload: businesses.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
    });
  }
};

export const resetGotBusinessList = () => (dispatch) => {
  dispatch({
    type: RESET_GOT_BUSINESS_LIST,
  });
};

export const selectCategory = (category) => (dispatch) => {
  dispatch({
    type: SELECT_CATEGORY,
    payload: category,
  });
};

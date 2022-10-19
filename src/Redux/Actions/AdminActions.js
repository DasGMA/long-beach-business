import axiosInstance from "../../../Interceptors/interceptors";

export const ADMIN_POSTING_CATEGORY = "ADMIN_POSTING_CATEGORY";
export const ADMIN_POSTED_CATEGORY = "ADMIN_POSTED_CATEGORY";
export const ADMIN_POSTING_CATEGORY_ERROR = "ADMIN_POSTING_CATEGORY_ERROR";
export const ADMIN_DELETING_CATEGORY = "ADMIN_DELETING_CATEGORY";
export const ADMIN_DELETED_CATEGORY = "ADMIN_DELETED_CATEGORY";
export const ADMIN_DELETE_CATEGORY_ERROR = "ADMIN_DELETE_CATEGORY_ERROR";
export const ADMIN_EDITING_CATEGORY = "ADMIN_EDITING_CATEGORY";
export const ADMIN_EDITED_CATEGORY = "ADMIN_EDITED_CATEGORY";
export const ADMIN_EDIT_CATEGORY_ERROR = "ADMIN_EDIT_CATEGORY_ERROR";
export const NEW_CATEGORY_NAME = "NEW_CATEGORY_NAME";
export const NEW_CATEGORY_DESCRIPTION = "NEW_CATEGORY_DESCRIPTION";
export const CLEAR_NEW_CATEGORY = "CLEAR_NEW_CATEGORY";
export const SELECT_FILE = "SELECT_FILE";

export const setCategoryName = (value) => (dispatch) => {
  dispatch({
    type: NEW_CATEGORY_NAME,
    payload: value,
  });
};

export const selectCategoryImage = (file) => (dispatch) => {
  dispatch({
    type: SELECT_FILE,
    payload: file,
  });
};

export const handleCategoryImageChange = (event) => (dispatch) => {
  event.preventDefault();
  const { name, value } = event.target;
  switch (name) {
    case "categoryName":
      dispatch(setCategoryName(value));
      return;
    case "categoryDescription":
      dispatch(setCategoryDescription(value));
      return;
    case "categoryImage":
      dispatch(selectCategoryImage(event.target.files[0]));
      return;
    default:
      return;
  }
};

export const setCategoryDescription = (value) => (dispatch) => {
  dispatch({
    type: NEW_CATEGORY_DESCRIPTION,
    payload: value,
  });
};

export const clearNewCategory = () => (dispatch) => {
  dispatch({
    type: CLEAR_NEW_CATEGORY,
    payload: {
      categoryName: "",
      categoryDescription: "",
    },
  });
};

export const adminPostCategory = () => async (dispatch, getState) => {
  const { newCategory, selectedFile } = getState().CategoriesReducer;
  const { categoryName, categoryDescription } = newCategory;

  dispatch({ type: ADMIN_POSTING_CATEGORY });

  try {
    const data = {
      categoryName,
      categoryDescription,
    };

    const newCategory = await axiosInstance.post(`/post-category`, data);

    const form = new FormData();
    form.append("categoryid", newCategory.data._id);
    form.append("image", selectedFile);

    const categoryImage = await axiosInstance.post(
      `/category-image-upload`,
      form,
    );

    newCategory.data.image = categoryImage.data;

    dispatch({
      type: ADMIN_POSTED_CATEGORY,
      payload: newCategory.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADMIN_POSTING_CATEGORY_ERROR,
      payload: error,
    });
  }
};

export const adminDeleteCategory = () => async (dispatch, getState) => {
  const { categories, selectedCategory } = getState().CategoriesReducer;

  dispatch({ type: ADMIN_DELETING_CATEGORY });

  try {
    const deleteConfig = { imageUrl: selectedCategory.image.imageUrl };
    await axiosInstance.post(`/delete-single-file`, deleteConfig);
    const deletedCategory = await axiosInstance.delete(`/delete-category`, {
      data: { _id: selectedCategory._id },
    });

    const filtered = categories.filter(
      (category) => category._id !== deletedCategory.data._id,
    );

    dispatch({
      type: ADMIN_DELETED_CATEGORY,
      payload: filtered,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_DELETE_CATEGORY_ERROR,
      payload: error,
    });
  }
};

export const adminEditCategory = (category) => async (dispatch, getState) => {
  const { categories } = getState().CategoriesReducer;

  dispatch({ type: ADMIN_EDITING_CATEGORY });

  try {
    const data = category;

    const token = localStorage.getItem("Token");
    const headers = { headers: { authorization: token } };
    const editedCategory = await axiosInstance.post(`/edit-category`, data);

    const newList = categories.reduce((newArr, category) => {
      if (category._id === editedCategory.data._id) {
        newArr.push(editedCategory.data);
      } else {
        newArr.push(category);
      }

      return newArr;
    }, []);

    dispatch({
      type: ADMIN_EDITED_CATEGORY,
      payload: newList,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_EDIT_CATEGORY_ERROR,
      payload: error,
    });
  }
};

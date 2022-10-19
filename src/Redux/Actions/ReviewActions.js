import axiosInstance from "../../../Interceptors/interceptors";
import { setRating } from "./RatingActions";

export const HANDLE_REVIEW_CHANGE = "HANDLE_REVIEW_CHANGE";
export const CLEAR_REVIEW = "CLEAR_REVIEW";
export const SELECT_FOR_REVIEW = "SELECT_FOR_REVIEW";
export const POSTING_REVIEW = "POSTING_REVIEW";
export const POSTED_BUSINESS_REVIEW = "POSTED_REVIEW";
export const POSTED_OFFER_REVIEW = "POSTED_OFFER_REVIEW";
export const POSTING_REVIEW_ERROR = "POSTING_REVIEW_ERROR";

export const handleReviewChange = (e) => (dispatch, getState) => {
  e.preventDefault();
  const { name, value } = e.target;
  const { rating } = getState().RatingReducer;
  const { review } = getState().ReviewReducer;

  const payload = {
    ...review,
    [name]: value,
    rating,
  };

  dispatch({
    type: HANDLE_REVIEW_CHANGE,
    payload,
  });
};

export const submitReview = () => async (dispatch, getState) => {
  const { review, selectedForReview } = getState().ReviewReducer;
  const { type, _id } = selectedForReview;
  const user = getState().LoginReducer.data;

  review.postedBy = user._id;

  const data = { ...review, type, _id };

  dispatch({
    type: POSTING_REVIEW,
  });

  try {
    if (type === "business") {
      const review = await axiosInstance.post(`/post-review`, data);

      dispatch({
        type: POSTED_BUSINESS_REVIEW,
        payload: {
          data: review.data,
          _id,
        },
      });
    }

    if (type === "offer") {
      const review = await axiosInstance.post(`/write-review`, data);
      dispatch({
        type: POSTED_OFFER_REVIEW,
        payload: review.data,
      });
    }
  } catch (error) {
    dispatch({
      type: POSTING_REVIEW_ERROR,
      payload: error,
    });
  }
};

export const clearReview = () => (dispatch) => {
  dispatch(setRating(0));
  dispatch({
    type: CLEAR_REVIEW,
  });
};

export const selectForReview = (payload) => (dispatch) => {
  dispatch({
    type: SELECT_FOR_REVIEW,
    payload,
  });
};

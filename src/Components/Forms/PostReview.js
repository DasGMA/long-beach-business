import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import { clearReview, handleReviewChange, selectForReview } from '../../Redux/Actions/ReviewActions';
import Button from '../Reusable/Button';
import Rating from '../Reusable/Rating';

export default function PostReview() {
    const { review } = useSelector(state => state.ReviewReducer);
    const { rating } = useSelector(state  => state.RatingReducer);
    const { title, content } = review;

    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(handleReviewChange(e));
    }

    const closeModal = () => {
        dispatch(toggleModal());
        dispatch(clearReview());
        dispatch(selectForReview(null));
    }

    const submitReview = () => {
        dispatch(submitReview());
        closeModal();
    }
console.log({review})
    return (
        <div className='edit-category-form'>
            <div className='edit-header'>
                <h1>Post a Review</h1>
            </div>
            <form className='edit-body'>
                <div className='container'>
                    <Rating 
                        rating={rating}
                        adjustable={true}
                    />
                </div>
                <div className='input-block'>
                    <label>Review Title:</label>
                    <input
                        type='text'
                        name='title'
                        placeholder='Review title'
                        onChange={onChange}
                        value={title}
                    />
                </div>
                <div className='input-block'>
                    <label>Review: </label>
                    <textarea
                        type='text'
                        rows={6}
                        name='content'
                        placeholder='Write review here.'
                        onChange={onChange}
                        value={content}
                    />
                </div>
            </form>
            <div className='buttons-container'>
                <Button 
                    icon="window-close"
                    iconSize={2} 
                    onClick={closeModal} 
                />

                <Button 
                    icon="check" 
                    iconSize={2} 
                    onClick={submitReview} 
                />
            </div>
        </div>
    )
}
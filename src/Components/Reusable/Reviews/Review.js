import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating';

function Review({
    review,
    authorImage,
    authorName,
    reviewDate,
    rating,
    reviewTitle
}) {

    return(
        <div className='review'>
            <div className='review-header'>
                <div className='author-info'>
                    <div className='author-image'>
                        <img 
                            alt={authorName}
                            src={authorImage}
                        />
                    </div>
                    <div className='review-date-rating'>
                        <Rating rating={rating}/> <span>{reviewDate}</span>
                    </div>

                </div>
                <div className='review-title'>
                    <h2>{reviewTitle}</h2>
                </div>
            </div>
            <div className='review-body'>
                <p>{review}</p>
            </div>

        </div>
    )
}

Review.defaultProps = {
    review: 'Review',
    authorImage: 'https://lbo-images.s3.us-west-1.amazonaws.com/avatars/1610576183164',
    authorName: 'Name Surname',
    rating: 0,
    reviewTitle: 'Review title'
}

Review.propTypes = {
    review: PropTypes.string,
    authorImage: PropTypes.string,
    authorName: PropTypes.string,
    reviewDate: PropTypes.string,
    rating: PropTypes.number,
    reviewTitle: PropTypes.string
}

export default Review;


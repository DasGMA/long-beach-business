import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

function Reviews({
    reviews
}) {
    

    const renderReviews = () => {
        if (reviews.length === 0) return <div><p>Be the first to Review.</p></div>
        return reviews.map(review => {
            return <Review 
                    review={review.content}
                    authorImage={review.postedBy.acatar.image.location}
                    authorName={review.postedBy.firstName + ' ' + review.postedBy.lastName}
                    reviewDate={review.createdAt}
                    rating={review.rating}
                    reviewTitle={review.title}
                    />
        })
    }

    return (
        <div className='reviews'>
            <h1>Reviews</h1>
            {renderReviews()}
        </div>
    )
}

Reviews.defaultProps = {
    reviews: []
}

Reviews.propTypes = {
    reviews: PropTypes.array
}

export default Reviews;
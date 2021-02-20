import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../../Reusable/StarRating';

function BusinessViewHeader({
    businessName,
    rating,
    reviewsCount
}) {

    return (
        <div className='business-view-header'>
            <div className='business-view-header-inner'>
                <h1>{businessName}</h1>
                <StarRating rating={rating} />
                <span>{reviewsCount} reviews</span>
            </div>
        </div>
    )
}

BusinessViewHeader.defaultProps = {
    businessName: 'Business Name',
    reviewsCount: 0
}

BusinessViewHeader.proptTypes = {
    businessName: PropTypes.string,
    rating: PropTypes.number,
    reviewsCount: PropTypes.number
}


export default BusinessViewHeader;
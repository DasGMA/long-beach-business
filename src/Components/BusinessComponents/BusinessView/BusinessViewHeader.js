import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../../Reusable/Rating';

function BusinessViewHeader({
    businessName,
    rating,
    reviewsCount
}) {

    return (
        <div className='business-view-header'>
            <div className='business-view-header-inner'>
                <h1>{businessName}</h1>
                <Rating rating={rating} />
                <span>{reviewsCount} reviews</span>
            </div>
        </div>
    )
}

BusinessViewHeader.defaultProps = {
    businessName: 'Business Name',
    rating: 0,
    reviewsCount: 0
}

BusinessViewHeader.proptTypes = {
    businessName: PropTypes.string,
    rating: PropTypes.number,
    reviewsCount: PropTypes.number
}


export default BusinessViewHeader;
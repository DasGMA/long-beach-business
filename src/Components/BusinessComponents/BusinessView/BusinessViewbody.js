import React from 'react';
import PropTypes from 'prop-types';

function BusinessViewBody({
    businessDescription,
    selectForReview
}) {
    return (
        <div className='business-view-body'>
            <div className='action-container'>
                <button
                    onClick={selectForReview}
                >Leave Review</button>
                <button>Post Media</button>
            </div>
            <p>{businessDescription}</p>
        </div>
    )
}

BusinessViewBody.defaultProps = {
    businessDescription: 'Business description.',
    selectForReview: () => {}
}

BusinessViewBody.propTypes = {
    businessDescription: PropTypes.string,
    selectForReview: PropTypes.func
}

export default BusinessViewBody;
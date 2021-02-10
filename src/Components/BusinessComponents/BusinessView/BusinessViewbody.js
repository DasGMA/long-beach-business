import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BusinessViewBody({
    businessDescription,
    selectForReview,
    match
}) {
    return (
        <div className='business-view-body'>
            <div className='action-container'>
                <button>
                    <Link to={`${match.url}/write-review`}
                        onClick={selectForReview}
                    >Leave Review</Link>
                </button>
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
    selectForReview: PropTypes.func,
    match: PropTypes.object
}

export default BusinessViewBody;
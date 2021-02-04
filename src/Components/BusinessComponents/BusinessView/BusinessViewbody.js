import React from 'react';
import PropTypes from 'prop-types';

function BusinessViewBody({
    businessDescription
}) {
    return (
        <div className='business-view-body'>
            <p>{businessDescription}</p>
        </div>
    )
}

BusinessViewBody.defaultProps = {
    businessDescription: 'Business description.'
}

BusinessViewBody.propTypes = {
    businessDescription: PropTypes.string
}

export default BusinessViewBody;
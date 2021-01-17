import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/category.scss';

function Category({ count, category, onClick, src}) {
    return (
        <button className='category' onClick={onClick}>
            <p>{category}</p>
        </button>
    );
}

Category.defaultProps = {
    count: 0,
    category: '',
    onClick: () => {},
    // src: need to uplaod to S3 default categories image
}

Category.propTypes = {
    count: PropTypes.number,
    category: PropTypes.string,
    onClick: PropTypes.func,
    src: PropTypes.string
}

export default Category;
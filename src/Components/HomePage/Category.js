import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/category.scss';

function Category({ count, category, onClick, src}) {
    return (
        <div className='category'>
            <h2>{category} {count}</h2>
            <button onClick={onClick}>
            <img 
                src={src} 
                alt={`${category}`} 
                style={{width: '100%', height: 'auto', backgroundSize: 'cover'}}
            />
            </button>
        </div>
        
    );
}

Category.defaultProps = {
    count: 0,
    category: '',
    onClick: () => {},
    src: 'https://lbo-images.s3.us-west-1.amazonaws.com/categories/default-category.png'
}

Category.propTypes = {
    count: PropTypes.number,
    category: PropTypes.string,
    onClick: PropTypes.func,
    src: PropTypes.string
}

export default Category;
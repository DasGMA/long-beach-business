import React from 'react';
import PropTypes from 'prop-types';

function CategoryImage(
    {
        alt,
        src,
        type,
        accept,
        multiple,
        onChange,
        selectedFile,
        onClick,
        imageClassName,
        containerClassName,
        name,
        first
    }
) {

    return(
        <div className={containerClassName}>
            <img
                className={imageClassName}
                alt={alt}
                src={selectedFile === null ? src : URL.createObjectURL(selectedFile)}
            />
        
            <input
                type={type}
                name={name}
                accept={accept}
                onChange={onChange}
                multiple={multiple}
                style={{
                    position: 'absolute',
                    right: '1rem',
                    bottom: '0', 
                    opacity: '0', 
                    zIndex: selectedFile === null ? '2' : '0'
                }}
            />
            <input 
                type='button'
                value={selectedFile === null ? 'Edit' : first === false ? 'Save' : 'Delete'}
                style={{
                    position: 'absolute', 
                    right: '50% - 2rem',
                    bottom: '0',
                    zIndex: selectedFile === null ? '0' : '2'
                }}
                onClick={selectedFile === null ? '' : onClick}
            />
        </div>
    )
}

CategoryImage.defaultProps = {
    alt: 'Alternate image description',
    src: 'https://lbo-images.s3-us-west-1.amazonaws.com/categories/default-category.png',
    type: 'file',
    accept: 'image/*',
    multiple: false,
    onChange: () => {},
    selectedFile: null,
    onClick: () => {},
    imageClassName: 'avatar-image',
    containerClassName: 'avatar-container',
    first: false
}

CategoryImage.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    type: PropTypes.oneOf(['file']),
    accept: PropTypes.oneOf(['*', 'image/*', 'video/*']),
    multiple: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    selectedFile: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    imageClassName: PropTypes.string,
    containerClassName: PropTypes.string,
    name: PropTypes.string,
    first: PropTypes.bool
}

export default CategoryImage;
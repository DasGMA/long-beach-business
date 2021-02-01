import React from 'react';
import PropTypes from 'prop-types';

function Avatar(
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
        name
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
                accept={accept}
                name={name}
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
                value={selectedFile === null ? 'Edit' : 'Save'}
                style={{
                    position: 'absolute', 
                    right: '50% - 2rem',
                    bottom: '0',
                    zIndex: selectedFile === null ? '0' : '2'
                }}
                onClick={selectedFile === null ? ()=>{} : onClick}
            />
        </div>
    )
}

Avatar.defaultProps = {
    alt: 'Alternate image description',
    src: 'https://lbo-images.s3-us-west-1.amazonaws.com/avatars/1610576183164',
    type: 'file',
    accept: 'image/*',
    multiple: false,
    onChange: () => {},
    selectedFile: null,
    onClick: () => {},
    imageClassName: 'avatar-image',
    containerClassName: 'avatar-container'
}

Avatar.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
    type: PropTypes.oneOf(['file']),
    accept: PropTypes.oneOf(['*', 'image/*', 'video/*']),
    multiple: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    selectedFile: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    imageClassName: PropTypes.string,
    containerClassName: PropTypes.string,
    name: PropTypes.string
}

export default Avatar;
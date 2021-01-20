import React from 'react';
import PropTypes from 'prop-types';

function BusinessImage(
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
        first,
        max,
        removeImage
    }
) {


    const renderImages = () => {
        if (selectedFile !== null && selectedFile.length > 0) {
            return selectedFile.map((file, index) => (
                    <img
                        key={index}
                        className={imageClassName}
                        fileIndex={index}
                        alt={alt}
                        src={selectedFile === null ? src : URL.createObjectURL(file)}
                        onClick={removeImage}
                    />
            ))
        } else {
            return <img
                    className={imageClassName}
                    alt={alt}
                    src={selectedFile === null ? src : URL.createObjectURL(selectedFile[0])}
                    />
        }
    }

    return(
        <div className={containerClassName}>
            {renderImages()}
            <input
                type={type}
                name={name}
                accept={accept}
                onChange={onChange}
                multiple={multiple}
                max={max}
                style={{
                    position: 'absolute',
                    right: '1rem',
                    bottom: '0', 
                    opacity: '0', 
                    zIndex: '2'
                }}
            />
            <input
                type='button'
                value='Choose images'
                style={{
                    position: 'absolute',
                    right: '50% - 2rem',
                    bottom: '0',
                    zIndex: '0'
                }}
                onClick={selectedFile === null ? '' : onClick}
            />
        </div>
    )
}

BusinessImage.defaultProps = {
    alt: 'Alternate image description',
    src: 'https://lbo-media.s3-us-west-1.amazonaws.com/default-multi-images.png',
    type: 'file',
    accept: 'image/*',
    multiple: false,
    onChange: () => {},
    selectedFile: null,
    onClick: () => {},
    imageClassName: 'avatar-image',
    containerClassName: 'avatar-container',
    first: false,
    removeImage: () => {}
}

BusinessImage.propTypes = {
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
    first: PropTypes.bool,
    max: PropTypes.number,
    removeImage: PropTypes.func,
}

export default BusinessImage;
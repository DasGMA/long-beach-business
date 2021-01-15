import React from 'react';

export default function Avatar(
    {
        alt = 'Alternate image description',
        src = 'https://lbo-images.s3-us-west-1.amazonaws.com/avatars/1610576183164',
        type = 'file',
        accept = 'image/*',
        multiple = false,
        onChange = () => {},
        selectedFile = null,
        onClick = () => {},
        imageClassName = 'avatar-image',
        containerClassName = 'avatar-container'
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
                onClick={selectedFile === null ? '' : onClick}
            />
        </div>
    )
}
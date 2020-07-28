import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/custom-button.scss';

export default function Button({icon, iconSize, onClick, text, textPosition}) {

    return (
        <div className='custom-button'>
            <button onClick={onClick}>
                 <i className={`fa fa-${icon} fa-${iconSize}x`}/>
            </button>
        </div>
    )
}

Button.defaultProps = {
    iconSize: 1
}

Button.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    textPosition: PropTypes.string,
    iconSize: PropTypes.number
}
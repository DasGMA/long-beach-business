import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/custom-button.scss';

export default function Button({ icon, iconSize, onClick, buttonName }) {

    return (
        <div className='custom-button'>
            <button onClick={onClick}>
                 {icon && <i className={`fa fa-${icon} fa-${iconSize}x`}/>} { buttonName }
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
    buttonName: PropTypes.string,
    iconSize: PropTypes.number
}
import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/modal.scss';

export default function Modal({
    visible,
    children
}) {

    const modalClassName =  visible ? 'modal' : 'modal hidden' ;

    return (
        <div 
            className={modalClassName}
            //style={{ animation: visible ? 'slideIn 2s' : 'slideOut 2s'}}
        >
            { children }
        </div>
    )
}

Modal.defaultProps = {
    visible: true
}

Modal.propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.node
}
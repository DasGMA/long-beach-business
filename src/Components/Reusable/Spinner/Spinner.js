import React from 'react';
import '../../../Styles/spinner.scss';
import spinner from '../../../Assets/loading.png';
import PropTypes from 'prop-types';

function Spinner({
    loading,
    size
}) {
    const animatedSpinner = {
        display: loading ? 'flex' : 'none', 
        animation: 'spin 3s infinite',
        width: size,
        height: size
    }
    return (
        <img 
            alt='Spinner'
            src={spinner}
            className='spinner'
            style={animatedSpinner}
        />
    )
}

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired,
    size: PropTypes.string.isRequired
}

export default Spinner;
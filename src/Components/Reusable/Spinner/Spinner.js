import React from 'react';
import '../../../Styles/spinner.scss';
import spinner from '../../../Assets/loading.png';

export default function Spinner(props) {
    const animatedSpinner = {
        display: props.loading ? 'flex' : 'none', 
        animation: 'spin 3s infinite',
        width: props.size,
        height: props.size
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
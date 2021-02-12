import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

function NavigationItem({
    to,
    name,
    className,
    onClick
}) {
    return (
        <Button 
            color='inherit' 
            component={Link} 
            to={to} 
            onClick={onClick} 
            className={className}
        >
            {name}
        </Button>
    )
}

NavigationItem.propTypes = {
    to: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}


export default NavigationItem;
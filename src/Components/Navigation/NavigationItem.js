import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationItem({
    to,
    name,
    className,
    onClick
}) {
    return (
            <Link
                to={to}
                className={className}
                onClick={onClick}
            >
                {name}
            </Link>
    )
}

NavigationItem.propTypes = {
    to: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}


export default NavigationItem;
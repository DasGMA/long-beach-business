import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex', 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}))

function Spinner({
    size,
    thickness
}) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <CircularProgress size={size} thickness={thickness}/>
        </div>
        
    )
}

Spinner.propTypes = {
    thickness: PropTypes.number,
    size: PropTypes.number || PropTypes.string
}

export default Spinner;
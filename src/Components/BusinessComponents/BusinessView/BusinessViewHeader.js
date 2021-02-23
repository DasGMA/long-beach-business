import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../../Reusable/StarRating';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        bottom: 0,
        padding: theme.spacing(2)
    },
    text: {
        color: '#ffffff'
    }
}))
function BusinessViewHeader({
    businessName,
    rating,
    reviewsCount
}) {

    const classes = useStyles();

    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item xs sm={8} md={6} container direction='column'>
                <Typography variant='h4' component='h1' className={classes.text}>{businessName}</Typography>
                <StarRating rating={rating} size='large' />
                <Typography variant='body1' className={classes.text}>{reviewsCount} reviews</Typography>
            </Grid>
        </Grid>
        
    );
}

BusinessViewHeader.defaultProps = {
    businessName: 'Business Name',
    reviewsCount: 0
}

BusinessViewHeader.proptTypes = {
    businessName: PropTypes.string,
    rating: PropTypes.number,
    reviewsCount: PropTypes.number
}


export default BusinessViewHeader;
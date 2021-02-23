import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../../Reusable/StarRating';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#000000',
        opacity: '0.7'
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
        <Grid container justify='center' className={classes.root} spacing={4}>
            <Grid item xs={6} container direction='column'>
                <Typography variant='h3' component='h1' className={classes.text}>{businessName}</Typography>
                <StarRating rating={rating} size='large' />
                <Typography variant='caption' className={classes.text}>{reviewsCount} reviews</Typography>
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
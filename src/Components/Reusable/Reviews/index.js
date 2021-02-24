import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2)
    }
}));

function Reviews({
    reviews
}) {
    
    const classes = useStyles();

    const renderReviews = () => {
        if (reviews.length === 0) return <Typography variant='h4' component='h1'>Be the first to Review.</Typography>
        return reviews.map(review => {
            return <Review
                    key={review._id}
                    review={review.content}
                    authorImage={review.postedBy.avatar.imageUrl}
                    authorName={review.postedBy.firstName + ' ' + review.postedBy.lastName}
                    reviewDate={review.createdAt}
                    rating={review.rating}
                    reviewTitle={review.title}
                    isOnline={review.postedBy.loggedIn}
                    />
        })
    }

    return (
        <Grid container item direction='column' xs sm={8} md={6} className={classes.root}>
            <Typography variant='h4' component='h1'>{reviews.length}{' '}Reviews</Typography>
            {renderReviews()}
        </Grid>
    )
}

Reviews.defaultProps = {
    reviews: []
}

Reviews.propTypes = {
    reviews: PropTypes.array
}

export default Reviews;
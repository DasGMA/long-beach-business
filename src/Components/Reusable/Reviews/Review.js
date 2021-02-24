import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import StyledAvatar from '../StyledAvatar';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}))

function Review({
    review,
    authorImage,
    authorName,
    reviewDate,
    rating,
    reviewTitle,
    isOnline
}) {

    const classes = useStyles();

    return(
        <Paper className={classes.root}>
            <Grid container direction='row' wrap='nowrap'>
                <StyledAvatar 
                    authorName={authorName}
                    authorImage={authorImage}
                    isOnline={isOnline.toString()}
                />
                <Grid container direction='column'>
                    <StarRating rating={rating} />
                    <Typography variant='caption'>{new Date(reviewDate).toDateString()}</Typography>
                </Grid>
            </Grid>
        </Paper>
        // <div className='review'>
        //     <div className='review-header'>
        //         <div className='author-info'>
        //             <div className='author-image'>
        //                 <img 
        //                     alt={authorName}
        //                     src={authorImage}
        //                 />
        //                 <div className='name'>
        //                     <h2>{authorName}</h2>
        //                 </div>
        //             </div>
        //             <div className='review-date-rating'>
        //                 <StarRating rating={rating}/> <span className='date'>{new Date(reviewDate).toDateString()}</span>
        //             </div>
        //         </div>
        //         <div className='review-title'>
        //             <h2>{reviewTitle}</h2>
        //         </div>
        //     </div>
        //     <div className='review-body'>
        //         <p>{review}</p>
        //     </div>

        // </div>
    )
}

Review.defaultProps = {
    review: 'Review',
    authorImage: 'https://lbo-images.s3.us-west-1.amazonaws.com/avatars/1610576183164',
    authorName: 'Name Surname',
    rating: 0,
    reviewTitle: 'Review title'
}

Review.propTypes = {
    review: PropTypes.string,
    authorImage: PropTypes.string,
    authorName: PropTypes.string,
    reviewDate: PropTypes.string,
    rating: PropTypes.number,
    reviewTitle: PropTypes.string
}

export default Review;


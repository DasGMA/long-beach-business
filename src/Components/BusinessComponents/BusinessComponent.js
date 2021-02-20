import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import PhotoSlider from './PhotoSlider';
import { selectBusiness } from '../../Redux/Actions/BusinessActions';
import StarRating from '../Reusable/StarRating';
import { Badge, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import OfferIcon from '@material-ui/icons/LocalOfferSharp';
import LikeIcon from '@material-ui/icons/ThumbUpAltSharp';
import DislikeIcon from '@material-ui/icons/ThumbDownSharp';
import CommentIcon from '@material-ui/icons/CommentSharp';
import ReviewIcon from '@material-ui/icons/GavelSharp';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2)
    },
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
    iconsBar: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    hoverable: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}))

export default function BusinessComponent(business) {
    const { businessName, 
            businessDescription,
            averageRating,
            businessImages,
            comments,
            //businessAddress,
            offers,
            reviews,
            //phoneNumber 
        } = business;

    const history = useHistory();
    const location = useLocation().pathname;
    const dispatch = useDispatch();
    const classes = useStyles();
console.log(business)
    const trimmedText = () => {
        if (businessDescription.length > 250) {
            return businessDescription.substring(0, 250) + '... More'
        } else {
            return businessDescription;
        }
    }

    const navigateToBusiness = () => {
        dispatch(selectBusiness(business));
        history.push(`${location}/${businessName}`);
    }

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <PhotoSlider
                        images={businessImages.images}
                    />
                </Grid>
                <Grid item xs={12} sm container direction='column' onClick={navigateToBusiness} className={classes.hoverable}>
                    <Grid item xs container direction='row' spacing={2}>
                        <Grid item xs>
                            <Typography variant='h4' component='h1'>{businessName}</Typography>
                            <StarRating rating={averageRating} /> 
                            <Typography variant='body1'>Tags</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Typography variant='body1'>{trimmedText()}</Typography>
                    </Grid>
                    <Grid item className={classes.iconsBar}>
                        <Badge 
                            badgeContent={offers.length} 
                            max={99} 
                            className={classes.badge}
                            color='secondary'
                            showZero
                        >
                            <OfferIcon />
                        </Badge>
                        <Badge 
                            badgeContent={offers.length} 
                            max={99} 
                            className={classes.badge}
                            color='secondary'
                            showZero
                        >
                            <LikeIcon />
                        </Badge>
                        <Badge 
                            badgeContent={offers.length} 
                            max={99} 
                            className={classes.badge}
                            color='secondary'
                            showZero
                        >
                            <DislikeIcon />
                        </Badge>
                        <Badge 
                            badgeContent={comments.length} 
                            max={99} 
                            className={classes.badge}
                            color='secondary'
                            showZero
                        >
                            <CommentIcon />
                        </Badge>
                        <Badge 
                            badgeContent={reviews.length} 
                            max={99} 
                            className={classes.badge}
                            color='secondary'
                            showZero
                        >
                            <ReviewIcon />
                        </Badge>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
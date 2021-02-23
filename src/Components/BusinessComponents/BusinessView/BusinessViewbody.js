import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import BusinessOperationHours from '../../Reusable/BusinessOperationHours';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2)
    },
    buttonContainer: {
        marginBottom: theme.spacing(2)
    },
    textContainer: {
        marginTop: theme.spacing(2)
    },
    text: {
        padding: theme.spacing(1)
    }
}));
function BusinessViewBody({
    businessDescription,
    selectForReview,
    match
}) {

    const classes = useStyles();

    return (
        <Grid container item xs sm={8} md={6} className={classes.root} direction='column'>
           
            <Grid container wrap='nowrap' className={classes.buttonContainer}>
                <Button
                    variant='outlined'
                    component={Link}
                    to={`${match.url}/write-review`}
                    onClick={selectForReview}
                >
                    Leave Review
                </Button>
                <Button variant='outlined'>Post Media</Button>
            </Grid>
            <Paper>
                <Grid container direction='row' className={classes.textContainer}>
                    <Grid item xs={12} md={7} className={classes.text}>
                        <Typography variant='h5'>About</Typography>
                        <Typography variant='body1'>{businessDescription}</Typography>
                    </Grid>
                    <BusinessOperationHours />
                </Grid>
            </Paper>
            
        </Grid>
    )
}

BusinessViewBody.defaultProps = {
    businessDescription: 'Business description.',
    selectForReview: () => {}
}

BusinessViewBody.propTypes = {
    businessDescription: PropTypes.string,
    selectForReview: PropTypes.func,
    match: PropTypes.object
}

export default BusinessViewBody;
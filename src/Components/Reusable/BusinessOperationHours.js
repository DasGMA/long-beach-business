import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    },
    activeDay: {
        color: 'green'
    }
}))

const WEEK = {
    1: { day: 'Mon', hours: '8:00 - 18:00'},
    2: { day: 'Tue', hours: '8:00 - 18:00'},
    3: { day: 'Wed', hours: '8:00 - 18:00'},
    4: { day: 'Thu', hours: '8:00 - 18:00'},
    5: { day: 'Fri', hours: '8:00 - 18:00'},
    6: { day: 'Sat', hours: '8:00 - 18:00'},
    0: { day: 'Sun', hours: '8:00 - 18:00'}
}

function BusinessOperationHours() {

    const classes = useStyles();
    const date = new Date();
    const today = date.getUTCDay();

    const renderDays = () => {
        return Object.entries(WEEK).map((day, index) => (
            <Typography 
                key={index} 
                className={today === parseInt(day[0]) ? classes.activeDay : ''} 
                variant='body1'>
                    {day[1].day}: {day[1].hours} {today === parseInt(day[0]) && ' opened'}
            </Typography>
        ))
    }

    return (
        <Grid item xs={12} md={4} className={classes.root}>
            <Typography variant='h5'>Operation Hours</Typography>
            {renderDays()}
        </Grid>
    )
}

export default BusinessOperationHours;
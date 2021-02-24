import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1)
    },
    activeDay: {
        color: 'green'
    },
    closed: {
        color: theme.palette.error.dark
    }
}))

const WEEK = {
    1: { day: 'Mon', hours: { open: '8:00', close: '18:00' }},
    2: { day: 'Tue', hours: { open: '8:00', close: '18:00' }},
    3: { day: 'Wed', hours: { open: '8:00', close: '18:00' }},
    4: { day: 'Thu', hours: { open: '8:00', close: '18:00' }},
    5: { day: 'Fri', hours: { open: '8:00', close: '18:00' }},
    6: { day: 'Sat', hours: { open: '8:00', close: '18:00' }},
    0: { day: 'Sun', hours: { open: '8:00', close: '18:00' }}
}

function BusinessOperationHours({
    week=WEEK
}) {

    const classes = useStyles();

    const date = new Date();
    const today = date.getDay().toString();
    const timeNow = parseInt(date.getHours().toString() + (date.getMinutes().toString().length === 1 ? '0' + date.getMinutes().toString() : date.getMinutes().toString()));

    const renderDays = () => {
        return Object.entries(week).map((day, index) => {
            const [open, close] = [parseInt(day[1].hours.open.split(':').join('')), parseInt(day[1].hours.close.split(':').join(''))];
            const isOpened = (today === day[0] && (open < timeNow || timeNow > close));

            if(today !== day[0] && (day[1].hours.open !== '' || day[1].hours.close !== '')) {
                return (
                    <Typography 
                        key={index} 
                        variant='body1'
                    >
                        {day[1].day}: {day[1].hours.open}-{day[1].hours.close}
                    </Typography>
                )
            } else if(day[1].hours.open === '' || day[1].hours.close === '') {
                return (
                    <Typography 
                        key={index} 
                        variant='body1'
                        className={classes.closed}
                    >
                        {day[1].day}: {' closed'}
                    </Typography>
                )
            } else {
                return (
                    <Typography 
                        key={index} 
                        className={isOpened ? classes.activeDay : classes.closed} 
                        variant='body1'
                    >
                        {day[1].day}: {day[1].hours.open}-{day[1].hours.close} {isOpened ? ' opened' : ' closed'}
                    </Typography>
                )
            }
        })
    }

    return (
        <Grid item xs={12} md={4} className={classes.root}>
            <Typography variant='h5'>Business Hours</Typography>
            {renderDays()}
        </Grid>
    )
}

export default BusinessOperationHours;
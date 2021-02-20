import { Grid, Link, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    footer: {
        flexShrink: 0
    },
    copyright: {
        marginTop: theme.spacing(2)
    },
    paper: {
        width: '100%',
        padding: theme.spacing(2)
    },
    grid: {
        marginTop: theme.spacing(2)
    }
}))

export default function Footer() {
    const year = new Date().getFullYear();
    const classes = useStyles();
    
    return (
        <Grid container direction='column' alignContent='center' className={classes.footer}>
            <Paper className={classes.paper}>
                <Grid container justify='center'>
                    <Grid container direction='column' item sm={3} className={classes.grid} alignItems='flex-start'>
                        <Typography variant='h5' component='h1'>About</Typography>
                        <Link variant='body1' component={NavLink} to='/about'>About LBO</Link>
                        <Link variant='body1' component={NavLink} to='/content-guidelines'>Content Guidelines</Link>
                        <Link variant='body1' component={NavLink} to='/terms-of-service'>Terms of Service</Link>
                        <Link variant='body1' component={NavLink} to='/privacy-policy'>Privacy Policy</Link>
                    </Grid>
                    <Grid container direction='column' item sm={3} className={classes.grid} alignItems='flex-start'>
                        <Typography variant='h5' component='h1'>Discover</Typography>
                        <Link variant='body1' component={NavLink} to='/events'>Long Beach Events</Link>
                        <Link variant='body1' component={NavLink} to='/support'>Support</Link>
                        <Link variant='body1' component={NavLink} to='/talk'>Talk</Link>
                        <Link variant='body1' component={NavLink} to='/sitemap'>Sitemap</Link>
                    </Grid>
                    <Grid container direction='column' item sm={3} className={classes.grid} alignItems='flex-start'>
                        <Typography variant='h5' component='h1'>For Business </Typography>
                        <Link variant='body1' component={NavLink} to='/claim-business'>Claim Business</Link>
                        <Link variant='body1' component={NavLink} to='/advertise'>Advertise</Link>
                        <Link variant='body1' component={NavLink} to='/success'>Success Stories</Link>
                        <Link variant='body1' component={NavLink} to='/support'>Business Support</Link>
                    </Grid>
                </Grid>
                
                <Typography 
                    variant='body1' 
                    align='center'
                    className={classes.copyright}
                >
                    Copyright &#169; LBO | {year}
                </Typography>
            </Paper>
        </Grid>
    );
}

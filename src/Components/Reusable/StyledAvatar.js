import React from 'react';
import { Avatar, Badge, Grid, makeStyles, Typography, withStyles } from '@material-ui/core';

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: props => props.isonline === 'true' ? '#44b700' : theme.palette.warning.light,
      color: props => props.isonline === 'true' ? '#44b700' : theme.palette.warning.light,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: props => props.isonline === true ? '$ripple 1.2s infinite ease-in-out' : 'none',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    }
  }))(Badge);

  const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        border: `1px solid ${theme.palette.background.paper}`
    }
}))

function StyledAvatar({
    authorName='',
    authorImage='',
    isOnline
}) {

    const classes = useStyles();

    return (
        <Grid >
            <StyledBadge
                overlap='circle'
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant='dot'
                isonline={isOnline}
            >
                <Avatar 
                    alt={authorName}
                    src={authorImage}
                    className={classes.avatar}
                />
            </StyledBadge>
            <Typography variant='body1' align='center'>{authorName}</Typography>
            
        </Grid>
    )
}

export default StyledAvatar;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loginAction,
    resetErrors,
    changeHandle,
    checkForErrors,
    resetInput,
} from '../../Redux/Actions/LoginActions';
import { NavLink, useHistory } from 'react-router-dom';
import Spinner from '../Reusable/Spinner/Spinner';
import { Link, Divider, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import LockIcon from '@material-ui/icons/LockOpenRounded';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          maxWidth: 250,
        },
      },
      container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing(2)
      },
      button: {
          minWidth: 250,
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
          marginTop: theme.spacing(2)
      }
    
}));

export default function Login() {
    const history = useHistory();
    const {
        errors,
        logingin,
        loggedin,
        userName,
        password,
        verifyPassword
    } = useSelector((state) => state.LoginReducer);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (loggedin) {
            dispatch(resetInput());
            history.push("/account");
        }

        if (history.location !== "/login") {
            dispatch(resetInput());
        }
    }, [loggedin, dispatch, history]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (dispatch(checkForErrors()) === false) {
            dispatch(loginAction());
        }
    };

    const handleChange = (event) => {
        console.log(event.target.name)
        dispatch(changeHandle(event));
    };

    const onFocus = () => {
        dispatch(resetErrors());
    };

    return (
        <div className={classes.container}>
            <div className={classes.container}>
                <Typography variant='h3'>Login to LBO</Typography>
                <Typography variant='body1'>New to LBO? <Link component={NavLink} to='/register'>Register</Link>.</Typography>
            </div>
            <form className={classes.root} noValidate autoComplete='off'>
                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <AccountIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            error={errors.Username}
                            name='username'
                            label='Username'
                            type='text'
                            value={userName}
                            onChange={handleChange}
                            onFocus={onFocus}
                            helperText={errors.Username}
                        />
                    </Grid>
                </Grid>
            
            
                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <LockIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            error={errors.Password ? true : false}
                            name='password'
                            label='Password'
                            type='password'
                            value={password}
                            onChange={handleChange}
                            onFocus={onFocus}
                            helperText={errors.Password}
                        />
                    </Grid>
                </Grid>

                <Grid container direction='column'>
                    <Grid container spacing={1} alignItems='flex-end'>
                        <Grid item>
                            <LockIcon />
                        </Grid>
                        <Grid item>
                            <TextField
                                error={errors.verifyPassword ? true : false}
                                label='Verify Password'
                                name='verifyPassword'
                                type='password'
                                value={verifyPassword}
                                onChange={handleChange}
                                onFocus={onFocus}
                                helperText={errors.verifyPassword}
                            />
                        </Grid>
                    </Grid>
                    <Typography variant='caption' align='right'><Link component={NavLink} to='!#'>Forgot password?</Link></Typography>
                </Grid>
            </form>
            <Divider />
            <Button 
                onClick={handleSubmit} 
                className={classes.button}
                variant='outlined'
            >
                {logingin  ? <Spinner size={25}/> : 'Login'}
            </Button>
        </div>
    );
}

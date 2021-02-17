import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../Styles/register.scss';
import { 
    Link,
    Divider,
    Grid,
    makeStyles,
    TextField,
    Typography,
    Button,
    Select,
    MenuItem,
    InputLabel 
} from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import LockIcon from '@material-ui/icons/LockOpenRounded';
import EmailIcon from '@material-ui/icons/AlternateEmailRounded';
import AccountTypeIcon from '@material-ui/icons/AssignmentIndRounded';
import {
    changeHandle,
    registerAction,
    checkForRegisterErrors,
    clearErrors,
    clearInput,
} from '../../Redux/Actions/RegisterActions';
import { NavLink, useHistory } from 'react-router-dom';
import Spinner from '../Reusable/Spinner/Spinner';

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
      },
      select: {
          minWidth: 225
      }
    
}));

export default function Register() {
    const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        userName,
        errors,
        registered,
        registering,
    } = useSelector((state) => state.RegisterReducer);

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (registered) {
            dispatch(clearInput());
            history.push('/');
        }

        if (history.location !== '/login') {
            dispatch(clearInput());
        }
    }, [registered, dispatch, history]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (dispatch(checkForRegisterErrors()) === false) {
            dispatch(registerAction());
        }
    };

    const handleChange = (event) => {
        dispatch(changeHandle(event));
    };

    const onFocus = () => {
        dispatch(clearErrors());
    };

    return (
        <div className={classes.container}>
            <div className={classes.container}>
                <Typography variant='h3'>Create LBO Account</Typography>
                <Typography variant='body1'>Already have an Account? <Link component={NavLink} to='/login'>Login</Link>.</Typography>
            </div>
            <form className={classes.root} noValidate autoComplete='off'>
                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <AccountIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            error={errors.firstName ? true : false}
                            name='firstName'
                            label='First Name'
                            type='text'
                            value={firstName}
                            onChange={handleChange}
                            onFocus={onFocus}
                            helperText={errors.firstName}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <AccountIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            error={errors.lastName ? true : false}
                            name='lastName'
                            label='Last Name'
                            type='text'
                            value={lastName}
                            onChange={handleChange}
                            onFocus={onFocus}
                            helperText={errors.lastName}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <AccountIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            error={errors.userName ? true : false}
                            name='username'
                            label='Username'
                            type='text'
                            value={userName}
                            onChange={handleChange}
                            onFocus={onFocus}
                            helperText={errors.userName}
                        />
                    </Grid>
                </Grid>
            
            
                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <EmailIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            error={errors.email ? true : false}
                            name='email'
                            label='Email'
                            type='email'
                            value={email}
                            onChange={handleChange}
                            onFocus={onFocus}
                            helperText={errors.email}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <LockIcon />
                    </Grid>
                    <Grid item>
                        <TextField
                            error={errors.password ? true : false}
                            label='Password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={handleChange}
                            onFocus={onFocus}
                            helperText={errors.password}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <AccountTypeIcon />
                    </Grid>
                    <Grid item>
                        <InputLabel shrink id='placeholder-label'>
                            Account Type
                        </InputLabel>
                        <Select
                            name='accountType'
                            labelId='placeholder-label'
                            value={accountType}
                            onChange={handleChange}
                            onFocus={onFocus}
                            className={classes.select}
                        >
                            <MenuItem value='Customer'>Customer</MenuItem>
                            <MenuItem value='Business'>Business</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
               
            </form>
            <Divider />
            <Button 
                onClick={handleSubmit} 
                className={classes.button}
                variant='outlined'
            >
                {registering ? <Spinner size={25}/> : 'Register'}
            </Button>
        </div>
    );
}

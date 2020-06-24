import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const {loggedin} = useSelector(state => state.LoginReducer);
    
    return <Route
      {...rest}
      render={props =>
        loggedin === true ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
}

export default ProtectedRoute;
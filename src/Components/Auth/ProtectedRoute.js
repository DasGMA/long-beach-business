import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedin, ...rest }) => (    
    <Route
      {...rest}
      render={(props) => (
      loggedin === true ? 
      <Component {...props} /> : 
      <Redirect to='/login' />
      )}
    />
  )

export default ProtectedRoute;
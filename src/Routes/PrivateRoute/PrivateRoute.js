import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

// this component is for checking the user is he/she logged in
const PrivateRoute = ({ children, ...rest }) => {
    const {user ,isLoading} = useAuth()

    if(isLoading){
      return (
        <div className="h-screen d-flex justify-content-center align-items-center">
          <CircularProgress />
        </div>
      )
    }
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;
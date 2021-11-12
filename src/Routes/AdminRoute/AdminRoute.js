import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

//this route is for checking is the user is admin
const AdminRoute = ({ children, ...rest }) => {
    const {user ,isLoading , admin} = useAuth()

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
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default AdminRoute;
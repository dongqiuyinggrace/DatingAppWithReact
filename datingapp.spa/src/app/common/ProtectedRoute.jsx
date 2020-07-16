import React from 'react';
import * as authService from '../services/authService';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    return (
        <Route 
          path={path} 
          {...rest}
          render={(props) => { 
              if (!authService.getCurrentUser()) return <Redirect to='/'/>;
              return Component?  <Component {...props}/> : render(props);
            }}
          
        />
    );
};

export default ProtectedRoute;

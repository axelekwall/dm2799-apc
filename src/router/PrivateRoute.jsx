import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: PrivateComponent, ...rest }) => {
  const isSignedIn = useSelector(state => state.auth.user !== null);
  return (
    <Route
      {...rest}
      render={props =>
        isSignedIn && PrivateComponent ? (
          <PrivateComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location.pathname,
              },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;

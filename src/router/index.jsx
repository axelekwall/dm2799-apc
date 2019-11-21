import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Public from '../pages/Public';
import useAuth from '../hooks/useAuth';
import useData from '../hooks/useData';

const ProtectedRoutes = () => {
  const dataInitialized = useData();
  return dataInitialized ? (
    <Switch>
      <Route component={Home} path="/dashboard" />
      <Redirect to="/dashboard" />
    </Switch>
  ) : (
    <div>Loading</div>
  );
};

const Router = () => {
  const authInitialized = useAuth();
  const dataInitialized = useData();
  return authInitialized && dataInitialized ? (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" />
        <PrivateRoute component={ProtectedRoutes} />
      </Switch>
    </BrowserRouter>
  ) : (
    <div>Loading</div>
  );
};

export default Router;

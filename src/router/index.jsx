import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/Home'
import Public from '../pages/Public'
import useAuth from '../hooks/useAuth'

const ProtectedRoutes = () => (
  <Switch>
    <Route component={Home} path="/dashboard" />
    <Redirect to="/dashboard" />
  </Switch>
)

const Router = () => {
  const isInitialized = useAuth()
  return isInitialized ? (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" />
        <PrivateRoute component={ProtectedRoutes} />
      </Switch>
    </BrowserRouter>
  ) : null
}

export default Router

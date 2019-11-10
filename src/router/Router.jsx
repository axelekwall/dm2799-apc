import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import useAuth from '../hooks/useAuth'

const ProtectedRoutes = () => (
  <Switch>
    <Route component={Home} exact path="/"></Route>
    <Redirect to="/"></Redirect>
  </Switch>
)

const Router = () => {
  const isInitialized = useAuth()
  return isInitialized ? (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/login"></Route>
        <PrivateRoute component={ProtectedRoutes}></PrivateRoute>
      </Switch>
    </BrowserRouter>
  ) : null
}

export default Router

import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'

const ProtectedRoutes = () => (
  <Switch>
    <Route component={Home} exact path="/"></Route>
    <Redirect to="/"></Redirect>
  </Switch>
)

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Login} path="/login"></Route>
      <Route component={Logout} path="/logout"></Route>
      <PrivateRoute component={ProtectedRoutes}></PrivateRoute>
    </Switch>
  </BrowserRouter>
)

export default Router

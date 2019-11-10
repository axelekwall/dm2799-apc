import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './router/Router'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  )
}

export default App

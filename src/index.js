import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './router'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

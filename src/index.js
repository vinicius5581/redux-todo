import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './state/Store'
import  './test';



render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
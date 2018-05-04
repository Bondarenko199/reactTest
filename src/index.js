import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import './config/webFonts'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'

import App from './components/App'
import { store, history } from './config/store'

const rootNode = document.getElementById('root')

if (rootNode) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>,
    rootNode
  )
}
else {
  document.write('Service is currently under maintenance. Please come back later.')
}
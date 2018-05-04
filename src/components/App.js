import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'

import { Home, Board } from './pages'

const App = () => (
  <div className="App">
    <Route exact path="/" component={Home}/>
    <Route exact path="/board/:id" component={Board}/>
  </div>
)

export default App

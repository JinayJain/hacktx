import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'

import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import Profile from './pages/Profile'

function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/member">
            <Profile />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import Result from './pages/Result'

import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import Profile from './pages/Profile'

function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/members/:id">
            <Profile />
          </Route>
          <Route path="/members">
            <Result/> 
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

export default App;
import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home'
import Result from './pages/Result'
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/test">
            <div>yo yo yo o</div>
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

export default App

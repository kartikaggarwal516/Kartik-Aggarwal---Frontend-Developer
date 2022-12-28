import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dragons from './Components/Dragons'
import Header from './Components/Header'
import Home from './Components/Home'
import Launches from './Components/Launches'
import Rockets from './Components/Rockets'

function App () {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/launches" component={Launches} />
          <Route path="/rockets" component={Rockets} />
          <Route path="/dragons" component={Dragons} />
        </Switch>
      </Router>
    </>
  )
}

export default App

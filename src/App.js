import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import User from './users/User'
import Alert from './components/Alert'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'

const App =()=> {
 
    return (
      <GithubState>
        <AlertState>
      <Router>
      <div>
        <Navbar icon='fab fa-github' title= ' Github Finder'/>
        <div className="container">
          <Alert/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>            
            <Route exact path='/user/:login' component={User}/>
            <Route component={NotFound}/> 
          </Switch>    
        </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    )
}
export default App;
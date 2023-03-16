import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';


function App() {


  return(
    <Router>
      <div>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home">
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
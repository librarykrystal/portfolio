import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import LinkBar from '../LinkBar/LinkBar';


function App() {


  return(
    <Router>
      <div>
        <Header />
        <Nav />
        <LinkBar />
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
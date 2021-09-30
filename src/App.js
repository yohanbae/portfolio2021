import logo from './logo.svg';
import './style.scss';
import React, {useEffect, useState} from 'react'
import Top from './Top';
import Portfolios from './Portfolios';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Html from './Html';
import Email from './Email';

function App() {
  return (
    <React.Fragment>
      <Top />
      <Router>
        <Switch>
          <Route path="/html">      
            <Html />
          </Route>
          <Route path="/email">      
            <Email />
          </Route>
          <Route path="/">      
            <Portfolios />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}


export default App;

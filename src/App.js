import logo from './logo.svg';
import './style.scss';
import React, {useEffect, useState} from 'react'
import Top from './Top';
import Portfolios from './Portfolios';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Top />
      <Portfolios />
      <Footer />
    </React.Fragment>
  );
}

export default App;

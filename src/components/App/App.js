import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header'
import Bio from '../Bio/Bio'
import Foot from '../Foot/Foot';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Bio />
      <Foot />
      </div>
    );
  }
}

export default App;

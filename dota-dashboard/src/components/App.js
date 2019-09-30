import React, { Component } from 'react';
import Header from "./Header";
import MatchHistory from "./MatchHistory";
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      results: {},
    };
  }
  render(){
    return (
      <div className="app">
          <Header />
          <MatchHistory />
      </div>
    )
  }
}

export default App;

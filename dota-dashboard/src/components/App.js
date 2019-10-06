import React, { Component } from 'react'
import Header from './Header'
import MatchHistory from './MatchHistory'
import SidePanel from './SidePanel'
import '../styles/App.scss'

class App extends Component {0
  constructor(){
    super();
    this.state = {
      results: {},
    }
  }
  
  render(){
    return (
      <div className="app">
        <Header />
        <div className="columns"> 
          <SidePanel />
          <MatchHistory />
        </div>
      </div>
    )
  }
}

export default App
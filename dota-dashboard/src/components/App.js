import React, { Component } from 'react'
import Header from './Header'
import MatchHistory from './MatchHistory'
import SidePanel from './SidePanel'
import '../styles/App.css'
import 'bulma/css/bulma.css'

class App extends Component {
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
        <div className='columns'> 
          <SidePanel />
          <MatchHistory />
        </div>
      </div>
    )
  }
}

export default App
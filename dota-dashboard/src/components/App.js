import React, { Component } from 'react'
import Header from './Header'
import FilterableMatchHistory from './FilterableMatchHistory'
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
      <FilterableMatchHistory />
    )
  }
}

export default App
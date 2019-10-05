import React, { Component } from 'react'
import Match from './Match'

const baseUrl = 'http://localhost:3001/api'

class MatchHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            hasErrors: null
        }
    }

    componentWillMount() {
        fetch(`${baseUrl}/matchHistory?accounts=94151040`)
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
            .catch(() => this.setState({ hasErrors: true }))
    }

    render() {
        return (
            <div className='column'>
                <div className='match-container '> 
                    {this.state.data.map(function(matchData, index) {
                        return <Match key={ index } matchData={ matchData } />
                    })}
                </div>
            </div>
        )
    }
}

export default MatchHistory
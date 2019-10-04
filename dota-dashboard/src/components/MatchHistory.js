import React, { Component } from 'react';
import Match from './Match';

const baseUrl = 'http://localhost:3001/api'

class MatchHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            hasErrors: false
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
            <div className='match-container'> 
                {this.state.data.map(function(matchData, index) {
                    return <Match key={ index } matchData={ matchData } />
                })}
            </div>
        )
    }
}

export default MatchHistory
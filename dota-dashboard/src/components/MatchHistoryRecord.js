import React, { Component } from 'react';

const baseUrl = 'http://localhost:3001/api'

class MatchHistoryRecord extends Component {
    render() {
        const match_id = this.props.matchData.match_id
        const account_id = this.props.matchData.account_id
        const start_time_utc = this.props.matchData.start_time_utc

        return (
            <div match_id={match_id} className='match'>
                <span>{start_time_utc}</span>
                <span>MatchID: {match_id}</span>
                <span>Player: {account_id}</span>
            </div>
        )
    }
}

export default MatchHistoryRecord
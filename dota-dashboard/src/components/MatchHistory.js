import React, { Component } from "react"
import Match from "./Match"


class MatchHistory extends Component {
    render() {
        return (
            <div className="column">
                <div className="match-container "> 
                    {this.props.matchData && this.props.matchData.map(function(matchData, index) {
                        return <Match matchData={ matchData } key={ index } />
                    })}
                    <p>{this.props.isFetching ? 'Fetching match data' : ''}</p>
                </div>
            </div>
        )
    }
}

export default MatchHistory
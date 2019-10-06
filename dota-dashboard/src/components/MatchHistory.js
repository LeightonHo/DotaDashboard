import React, { Component } from "react"
import Match from "./Match"


class MatchHistory extends Component {
    render() {
        return (
            <div className="column">
                <div className="match-container "> 
                    {this.props.match_data && this.props.match_data.map(function(match_data, index) {
                        return <Match match_data={ match_data } key={ index } />
                    })}
                    <p>{this.props.isFetching ? 'Fetching match data' : ''}</p>
                </div>
            </div>
        )
    }
}

export default MatchHistory
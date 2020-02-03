import React, { Component } from "react"
import Match from "./Match"
import "../styles/match.scss"

class MatchHistory extends Component {
    render() {
        return (
            <div className="match-history-container column">
                {this.props.matchData && this.props.matchData.map((matchData, index) => {
                    return <Match matchData={ matchData } key={ index } />
                })}
                <p>{this.props.isFetching ? "Loading match data..." : ""}</p>
            </div>
        )
    }
}

export default MatchHistory
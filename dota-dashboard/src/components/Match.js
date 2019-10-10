import React, { Component } from "react";
import { lobby_type, heroes } from "dotaconstants"
import Hero from "./Hero";
import MatchDetail from "./MatchDetail"
import "../styles/match.scss"

const moment = require("moment")
const opendota_api = "https://api.opendota.com"
const baseUrl = "http://localhost:3001/api"

class Match extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFetching: false,
            showDetails: false,
            matchDetails: null
        }
    }

    fetchMatchDetails(match_id) {
        const url = `${baseUrl}/matchDetails?match_id=${match_id}`

        this.setState({ isFetching: true })

        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({
                isFetching: false,
                showDetails: true,
                matchDetails: res
            }))
            .catch(() => this.setState({ hasErrors: true }))
    }

    toggleDetails() {
        // if we're not currently showing the match details, then check if we have the data for it.
        // if we don't have the detailed match data, then fetch and display it.
        if (!this.state.showDetails && !this.state.matchDetails) {
            console.log("fetching")
            this.fetchMatchDetails(this.props.matchData.match_id)
        } else {
            console.log("toggling")
            this.setState({ showDetails: !this.state.showDetails })
        }
    }

    render() {
        const startDate = moment(this.props.matchData.start_time_utc).format("DD/MM/YYYY hh:mma")
        const team = determineTeam(this.props.matchData.player_slot)
        const win = determineWin(team, this.props.matchData.radiant_win)
        const winText = win ? "Victory" : "Defeat"
        const hero = heroes[this.props.matchData.hero_id]
        const duration = determineDurationText(this.props.matchData.duration)
        const lobby = lobby_type[this.props.matchData.lobby_type]

        console.log(this.state.matchDetails)

        return (
            <div className="match-container">
                <div match_id={this.props.matchData.match_id} className={`columns match ${win ? "victory" : "defeat"}`} onClick={() => { this.toggleDetails() }}>
                    <Hero name={hero.localized_name} img_url={`${opendota_api}${hero.icon}`} />
                    <div className="column is-3">
                        <div>
                            <span>{startDate}</span>
                        </div>
                        <div>
                            <span>{duration}</span>
                        </div>
                    </div>
                    <div className="column is-2">
                        <span>{this.props.matchData.kills} / {this.props.matchData.deaths} / {this.props.matchData.assists}</span>
                    </div>
                    <div className="column">
                        <span>MatchID: {this.props.matchData.match_id}</span>
                        <span>Player: {this.props.matchData.account_id}</span>
                        <span>Team: {team}</span>
                        <span>{winText}</span>
                        <span>{lobby.name}</span>
                    </div>
                </div>
                { this.state.showDetails ? <MatchDetail matchDetails={this.state.matchDetails} /> : "" }
            </div>
            
        )
    }
}

const determineTeam = (playerSlot) => {
    // Which slot the player is in. 0-127 are Radiant, 128-255 are Dire
    if (playerSlot > 0 && playerSlot < 128 ) {
        return "Radiant"
    } else {
        return "Dire"
    }
}

const determineWin = (team, radiantVictory) => {
    if (team === "Radiant" && radiantVictory) {
        return true
    } else if (team === "Dire" && !radiantVictory) {
        return true
    } else {
        return false
    }
}

const determineDurationText = (duration) => {
    // duration is in seconds
    const minutes = (duration / 60).toFixed(0)
    const seconds = duration % 60

    return `${minutes}m ${seconds}s`
}

export default Match
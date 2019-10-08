import React, { Component } from "react";
import { lobby_type, heroes } from "dotaconstants"
import Hero from "./Hero";

const moment = require("moment")
const opendota_api = "https://api.opendota.com"

class Match extends Component {
    constructor(props) {
        super(props)

        this.state = {
            victory: false
        }
    }

    render() {
        const startDate = moment(this.props.matchData.start_time_utc).format("DD/MM/YYYY hh:mma")
        const team = determineTeam(this.props.matchData.player_slot)
        const win = determineWin(team, this.props.matchData.radiant_win)
        const winText = win ? "Victory" : "Defeat"
        const hero = heroes[this.props.matchData.hero_id]
        const duration = determineDurationText(this.props.matchData.duration)
        console.log(this)

        return (
            <div match_id={this.props.matchData.match_id} className={`columns match ${win ? "victory" : "defeat"}`}>
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
                </div>
            </div>
        )
    }
}

const determineTeam = (playerSlot) => {
    // Which slot the player is in. 0-127 are Radiant, 128-255 are Dire
    if (playerSlot > 0 && playerSlot < 128 ) {
        return "Radiant"
    } 
        
    return "Dire"
}

const determineWin = (team, radiantVictory) => {
    if (team === "Radiant" && radiantVictory) {
        return true
    }

    return false
}

const determineDurationText = (duration) => {
    // duration is in seconds
    const minutes = (duration / 60).toFixed(0)
    const seconds = duration % 60

    return `${minutes}m ${seconds}s`
}

export default Match
import React, { Component } from 'react';
import { lobby_type, heroes } from 'dotaconstants'
import Hero from './Hero';

const moment = require('moment')

class MatchHistoryRecord extends Component {
    render() {
        const match_id = this.props.matchData.match_id
        const account_id = this.props.matchData.account_id
        const start_date = moment(this.props.matchData.start_time_utc).format("DD/MM/YYYY hh:mma")
        const duration = (this.props.matchData.duration / 60).toFixed(2)
        const team = determineTeam(this.props.matchData.player_slot)
        const win = determineWin(team, this.props.matchData.radiant_win)
        const win_text = win ? 'Victory' : 'Defeat'
        const hero = heroes[this.props.matchData.hero_id]

        return (
            <div match_id={match_id} className='match'>
                <Hero name={hero.localized_name} mg_url={hero.icon} />
                <div>
                    <span>{start_date} ({duration} mins)</span>
                    <span>MatchID: {match_id}</span>
                    <span>Player: {account_id}</span>
                    <span>Team: {team}</span>
                    <span>{win_text}</span>
                </div>
            </div>
        )
    }
}

const determineTeam = (player_slot) => {
    // Which slot the player is in. 0-127 are Radiant, 128-255 are Dire
    if (player_slot > 0 && player_slot < 128 ) {
        return 'Radiant'
    } 
        
    return 'Dire'
}

const determineWin = (team, radiant_win) => {
    if (team == 'Radiant' && radiant_win) {
        return true
    }

    return false
}

export default MatchHistoryRecord
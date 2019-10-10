import React, {Component} from "react"
import { heroes } from "dotaconstants"
import "../styles/match.scss"

class MatchDetail extends Component {
    render () {
        return (
            <div className="match-detail">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Hero</th>
                            <th>Kills</th>
                            <th>Deaths</th>
                            <th>Assists</th>
                            <th>Last Hits</th>
                            <th>Denies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.matchDetails.players && this.props.matchDetails.players.map(function(player, index) {
                            return (
                                <tr key={index}>
                                    <td>{heroes[player.hero_id].localized_name}</td>
                                    <td>{player.kills}</td>
                                    <td>{player.deaths}</td>
                                    <td>{player.assists}</td>
                                    <td>{player.last_hits}</td>
                                    <td>{player.denies}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }    
}

export default MatchDetail
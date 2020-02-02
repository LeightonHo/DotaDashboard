import React, {Component} from "react"
import { heroes } from "dotaconstants"
import "../styles/match.scss"

const opendota_api = "https://api.opendota.com"

class MatchDetail extends Component {
    render () {
        return (
            <div className="match-detail">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
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
                                    <td>
                                        <img className='icon-small' src={`${opendota_api}${heroes[player.hero_id].icon}`} />
                                    </td>
                                    <td>{heroes[player.hero_id].localized_name} ({player.account_id})</td>
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
import React, { Component } from "react"
import PlayerSearch from "./PlayerSearch"
import "../styles/player-list.scss"

class PlayerList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h2 className="title is-3">Players</h2>
                <div className="player-list container columns is-multiline">
                    {this.player_list && this.player_list.map((player, index) => {
                        return (
                            <div className="player column" key={index}>
                                <img src={player.avatarfull} alt="" />
                                <span>{player.personaname}</span>
                            </div>
                        )
                    })}
                </div>
                <PlayerSearch addPlayer={(player) => this.props.addPlayer(player)} />
            </div>
        )
    }
}

export default PlayerList
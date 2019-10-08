import React, { Component } from "react"
import PlayerSearch from "./PlayerSearch"
import "../styles/player-list.scss"

class PlayerList extends Component {
    render() {
        return (
            <>
                <h2 className="title is-3">Players</h2>
                <h4 className="subtitle">Click to remove</h4>
                <div className="player-list container columns is-multiline">
                    {this.props.playerList && this.props.playerList.map((player, index) => {
                        return (
                            <div className="player column" onClick={() => this.props.removePlayer(this.props.playerList[index])} key={index}>
                                <img src={player.avatarfull} alt="" />
                                <span>{player.personaname}</span>
                            </div>
                        )
                    })}
                </div>
                <PlayerSearch addPlayer={(player) => this.props.addPlayer(player)} />
            </>
        )
    }
}

export default PlayerList
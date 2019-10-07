import React, { Component } from "react"
import PlayerList from "./PlayerList"

class SidePanel extends Component {
    render() {
        return (
            <div className="column is-one-quarter">
                <div className="side-panel">
                    <PlayerList 
                        playerList={this.props.playerList} 
                        addPlayer={(player) => this.props.addPlayer(player)} 
                        removePlayer={(player) => this.props.removePlayer(player)}
                    />
                </div>
            </div>
        )
    }
}

export default SidePanel
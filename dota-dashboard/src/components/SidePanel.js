import React, { Component } from "react"
import PlayerList from "./PlayerList"
import ViewSelector from "./ViewSelector"
import PlayerSearch from "./PlayerSearch"

class SidePanel extends Component {
    render() {
        return (
            <div className="side-panel column is-one-quarter">
                {/* <ViewSelector /> */}
                <PlayerList 
                    playerList={this.props.playerList} 
                    removePlayer={(player) => this.props.removePlayer(player)}
                />
                <PlayerSearch addPlayer={(player) => this.props.addPlayer(player)} />
            </div>
        )
    }
}

export default SidePanel
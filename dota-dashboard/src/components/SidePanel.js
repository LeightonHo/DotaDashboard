import React, { Component } from "react"
import PlayerList from "./PlayerList"
import ViewSelector from "./ViewSelector"

class SidePanel extends Component {
    render() {
        return (
            <div className="side-panel column is-one-quarter">
                {/* <ViewSelector /> */}
                <PlayerList 
                    playerList={this.props.playerList} 
                    addPlayer={(player) => this.props.addPlayer(player)} 
                    removePlayer={(player) => this.props.removePlayer(player)}
                />
            </div>
        )
    }
}

export default SidePanel
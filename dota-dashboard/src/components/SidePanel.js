import React, { Component } from "react"
import PlayerList from "./PlayerList"

class SidePanel extends Component {
    render() {
        console.log('sidepanel props')
        console.log(this.props)

        return (
            <div className="column is-one-quarter">
                <div className="side-panel">
                    <PlayerList player_list={this.props.player_list} addPlayer={(player) => this.props.addPlayer(player)} />
                </div>
            </div>
        )
    }
}

export default SidePanel
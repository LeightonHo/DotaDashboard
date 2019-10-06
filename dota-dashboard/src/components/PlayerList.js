import React, {Component} from 'react'
import PlayerSearch from './PlayerSearch'

class PlayerList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player_list: []
        }
    }

    addPlayer(evt) {
        console.log(evt)

        // this.setState({ 
        //     player_list: this.state.player_list.push(player)
        // })
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="title is-3">Players</h2>
                </div>
                <div className='player-list-container container'>

                </div>
                <PlayerSearch addPlayer={() => this.addPlayer()} />
            </div>
        )
    }
}

export default PlayerList
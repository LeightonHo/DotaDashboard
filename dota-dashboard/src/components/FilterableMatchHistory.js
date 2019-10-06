import React, { Component } from "react";
import MatchHistory from './MatchHistory'
import SidePanel from './SidePanel'

const baseUrl = "http://localhost:3001/api"

class FilterableMatchHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            is_fetching: false,
            player_list: [],
            match_data: []
        }
    }

    addPlayer(player) {
        let updated_player_list = [...this.state.player_list, player]

        this.setState({ 
            player_list: updated_player_list
        })

        this.updateMatchData(updated_player_list)
    }

    removePlayer() { 
        // TODO: method for removing players from the following list
    }

    getAccountListCSV(updated_player_list) {
        let result = ""

        console.log(updated_player_list)

        for (let player of updated_player_list) {
            result += player.account_id + ","
        }

        // remove trailing comma
        result = result.substring(0, result.length - 1)

        return result
    }

    updateMatchData(updated_player_list) {
        this.setState({ is_fetching: true })
        
        const account_list = this.getAccountListCSV(updated_player_list)
        const url = `${baseUrl}/matchHistory?accounts=${account_list}`
        console.log(url)

        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({
                match_data: res,
                is_fetching: false
            }))
            .catch(() => this.setState({ has_errors: true }))
    }

    render() {
        return (
            <div className="columns"> 
                <SidePanel 
                    player_list={this.state.player_list} 
                    addPlayer={(player) => this.addPlayer(player)} 
                    removePlayer={(player) => this.removePlayer(player)}
                />
                {(this.state.is_fetching) ? "Fetching match data" : <MatchHistory match_data={this.state.match_data} />}
            </div>
        )
    }
}

export default FilterableMatchHistory
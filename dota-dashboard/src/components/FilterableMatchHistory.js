import React, { Component } from "react";
import MatchHistory from './MatchHistory'
import SidePanel from './SidePanel'

const baseUrl = "http://localhost:3001/api"

class FilterableMatchHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fetch_required: false,
            is_fetching: false,
            player_list: [],
            match_data: []
        }
    }

    addPlayer(player) {
        console.log(player)

        this.setState({ 
            player_list: [...this.state.player_list, player],
            fetch_required: true
        })
    }

    fetchMatchData() {
        this.setState({ is_fetching: true })
        console.log(this.state.player_list)

        fetch(`${baseUrl}/matchHistory?accounts=94151040`)
            .then(res => res.json())
            .then(res => this.setState({
                match_data: res,
                is_fetching: false,
                fetch_required: false
            }))
            .catch(() => this.setState({ has_errors: true }))
    }

    render() {
        if (this.state.fetch_required) {
            console.log('fetch required')
            // this.fetchMatchData()
        }
        else {
            console.log('fetch not required')
        }

        return (
            <div className="columns"> 
                <SidePanel player_list={this.state.player_list} addPlayer={(player) => this.addPlayer(player)} />
                <MatchHistory match_data={this.state.match_data} />
            </div>
        )
    }
}

export default FilterableMatchHistory
import React, { Component } from "react";
import MatchHistory from './MatchHistory'
import SidePanel from './SidePanel'

const baseUrl = "http://localhost:3001/api"

class FilterableMatchHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFetching: false,
            playerList: [],
            matchData: []
        }
    }

    addPlayer(player) {
        let updatedPlayerList = [...this.state.playerList, player]

        this.setState({ 
            playerList: updatedPlayerList,
            matchData: []
        })

        this.updateMatchData(updatedPlayerList)
    }

    removePlayer(player) { 
        // TODO: method for removing players from the following list
        let updatedPlayerList = []
        let currentPlayer

        for (let i = 0; i < this.state.playerList.length; i++) {
            currentPlayer = this.state.playerList[i]

            if (currentPlayer.account_id === player.account_id) {
                updatedPlayerList = [...this.state.playerList.slice(0, i), ...this.state.playerList.slice(i + 1)]
                break
            }
        }

        this.setState({ 
            playerList: updatedPlayerList,
            matchData: []
        })

        this.updateMatchData(updatedPlayerList)
    }

    getAccountListCSV(updatedPlayerList) {
        let result = ""

        console.log(updatedPlayerList)

        for (let player of updatedPlayerList) {
            result += player.account_id + ","
        }

        // remove trailing comma
        result = result.substring(0, result.length - 1)

        return result
    }

    updateMatchData(updatedPlayerList) {
        this.setState({ isFetching: true })
        
        const accountList = this.getAccountListCSV(updatedPlayerList)

        if (accountList.length === 0) {
            this.setState({ isFetching: false })

            return
        }

        const url = `${baseUrl}/matchHistory?accounts=${accountList}`
        console.log(url)

        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({
                matchData: res,
                isFetching: false
            }))
            .catch(() => this.setState({ hasErrors: true }))
    }

    render() {
        return (
            <div className="columns"> 
                <SidePanel 
                    playerList={this.state.playerList} 
                    addPlayer={(player) => this.addPlayer(player)} 
                    removePlayer={(player) => this.removePlayer(player)}
                />
                {(this.state.isFetching) ? "Fetching match data" : <MatchHistory matchData={this.state.matchData} />}
            </div>
        )
    }
}

export default FilterableMatchHistory
import React, { Component } from "react";
import MatchHistory from './MatchHistory'
import SidePanel from './SidePanel'

const baseUrl = "http://localhost:3001/api"

class FilterableMatchHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFetching: false,
            playerList: this.fetchPlayerListFromLocalStorage(),
            matchData: []
        }
    }

    componentDidMount() {
        if (this.state.playerList && this.state.playerList.length > 0) {
            this.updateMatchHistoryData(this.state.playerList)
        }
    }

    addPlayer(player) {
        if (this.isFollowingPlayer(player)) {
            return
        }

        let updatedPlayerList = [...this.state.playerList, player]

        this.setState({ 
            playerList: updatedPlayerList,
            matchData: []
        })

        this.savePlayerListToLocalStorage(updatedPlayerList);
        this.updateMatchHistoryData(updatedPlayerList)
    }

    removePlayer(player) { 
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

        this.savePlayerListToLocalStorage(updatedPlayerList);
        this.updateMatchHistoryData(updatedPlayerList)
    }

    isFollowingPlayer(player) {
        let currentPlayer

        for (let i = 0; i < this.state.playerList.length; i++) {
            currentPlayer = this.state.playerList[i]

            if (currentPlayer.account_id === player.account_id) {
                return true
            }
        }
    }

    savePlayerListToLocalStorage(playerList) {
        localStorage.playerList = JSON.stringify(playerList)
    }

    fetchPlayerListFromLocalStorage() {
        let playerList = localStorage.playerList

        if (playerList) {
            return JSON.parse(playerList)
        } else {
            return []
        }
    }

    getAccountListCSV(updatedPlayerList) {
        let result = ""

        for (let player of updatedPlayerList) {
            result += player.account_id + ","
        }

        // remove trailing comma
        result = result.substring(0, result.length - 1)

        return result
    }

    updateMatchHistoryData(updatedPlayerList) {
        const accountList = this.getAccountListCSV(updatedPlayerList)

        if (accountList.length === 0) {
            return
        }

        const url = `${baseUrl}/matchHistory?accounts=${accountList}`

        this.setState({ isFetching: true })

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
            <div className="filterable-match-history columns"> 
                <SidePanel 
                    playerList={this.state.playerList} 
                    addPlayer={(player) => this.addPlayer(player)} 
                    removePlayer={(player) => this.removePlayer(player)}
                />
                {(this.state.isFetching) 
                    ? <progress className="progress-bar progress is-large is-primary"></progress> 
                    : <MatchHistory matchData={this.state.matchData} />}
            </div>
        )
    }
}

export default FilterableMatchHistory
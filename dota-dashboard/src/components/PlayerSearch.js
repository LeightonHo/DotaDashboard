import React, { Component } from "react"
import "../styles/player-search.scss"

const baseUrl = "http://localhost:3001/api"

class PlayerSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isFetching: false,
            inputValue: "",
            data: [],
            hasErrors: null
        }
    }

    render() {
        return (
            <div>
                <div className="player-search">
                    <h2 className="search-title title is-3">Search</h2>
                    <div className="search-input-div columns">
                        <div className="column is-10">
                            <input className="search-input input is-small" value={this.state.player_inputValue} onChange={(event => this.updateInputValue(event))} placeholder="Leji"></input>
                        </div>
                        <div className="column is-2">
                            <button className={`search-button button is-small is-primary ${this.state.isFetching ? "is-loading" : ""}`} onClick={() => this.findPlayers()}>Search</button>
                        </div>
                    </div>
                    <div className="search-result columns is-multiline">
                        {this.state.data.map((playerData, index) => {
                            return (
                                <div className="player column is-2" onClick={() => this.props.addPlayer(this.state.data[index])} key={index}>
                                    <img src={playerData.avatarfull} alt="" />
                                    <span>{playerData.personaname}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    updateInputValue(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    findPlayers = () => {
        if (this.state.inputValue.length > 0) {
            this.setState({ 
                isFetching: true,
                data: []
            })
            fetch(`${baseUrl}/searchPlayer?persona_name=${this.state.inputValue}`)
                .then(res => res.json())
                .then(res => this.setState({ 
                    data: res,
                    isFetching: false
                }))
                .catch(() => this.setState({ hasErrors: true }))
        }
    }
}

export default PlayerSearch
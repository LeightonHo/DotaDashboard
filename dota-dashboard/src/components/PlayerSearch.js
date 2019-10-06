import React, { Component } from "react"
import "../styles/player-search.scss"

const baseUrl = "http://localhost:3001/api"

class PlayerSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input_value: "",
            data: [],
            hasErrors: null
        }
    }

    render() {
        return (
            <div>
                <div className="player-search">
                    <h2 className="search-title title is-3">Search</h2>
                    <div className="search-input-div">
                        <input className="search-input input is-small" value={this.state.player_input_value} onChange={(event => this.updateInputValue(event))} placeholder="Leji"></input>
                        <button className="search-button button is-small is-primary" onClick={() => this.findPlayers()}>Search</button>
                    </div>
                    <div className="search-result columns is-multiline">
                        {this.state.data.map((playerData, index) => {
                            return (
                                <div className="column is-2" onClick={() => this.props.addPlayer(this.state.data[index])} key={index}>
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
            input_value: event.target.value
        })
    }

    findPlayers = () => {
        console.log(this.state.input_value)

        if (this.state.input_value.length > 0) {
            console.log("fetching players")
            fetch(`${baseUrl}/searchPlayer?persona_name=${this.state.input_value}`)
                .then(res => res.json())
                .then(res => this.setState({ data: res }))
                .then(() => console.log(this.state.data))
                .catch(() => this.setState({ hasErrors: true }))
        }
    }
}

export default PlayerSearch
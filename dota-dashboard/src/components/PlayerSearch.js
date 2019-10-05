import React, {Component} from 'react'

const baseUrl = 'http://localhost:3001/api'

class PlayerSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input_value: '',
            data: [],
            hasErrors: null
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className='search'>
                <input className='input is-small' value={this.state.player_input_value} onChange={(evt => this.updateInputValue(evt))} placeholder='Leji'></input>
                <button onClick={() => this.findPlayers()}>Search</button>
                <div>
                    {this.state.data.map(function(playerData, index) {
                        return (
                            <div key={index}>
                                <img src={playerData.avatarfull} />
                                <span>{playerData.persona_name}</span>
                            </div>
                        )
                    })}
                </div>
                 
            </div>
        )
    }

    updateInputValue(evt) {
        this.setState({
            input_value: evt.target.value
        })
    }

    findPlayers = () => {
        console.log(this.state.input_value)

        if (this.state.input_value.length > 0) {
            console.log('fetching players')
            fetch(`${baseUrl}/searchPlayer?persona_name=${this.state.input_value}`)
                .then(res => res.json())
                .then(res => this.setState({ data: res }))
                .then(() => console.log(this.state.data))
                .catch(() => this.setState({ hasErrors: true }))
        }
    }
}

export default PlayerSearch
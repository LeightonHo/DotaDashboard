import React, { Component} from 'react'
import PlayerList from './PlayerList'

class SidePanel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='column is-one-quarter'>
                <div className='side-panel'>
                    <PlayerList />
                </div>
            </div>
        )
    }
}

export default SidePanel
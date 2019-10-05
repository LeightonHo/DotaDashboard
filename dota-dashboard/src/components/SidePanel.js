import React, { Component} from 'react'
import PlayerSearch from './PlayerSearch'

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
                    <PlayerSearch />
                </div>
            </div>
        )
    }
}

export default SidePanel
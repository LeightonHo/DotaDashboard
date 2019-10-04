import React, {Component} from 'react'

class Hero extends Component {
    render() {
        return (
            <div className='hero'> 
                <img src={this.props.img_url} />
                <span>{this.props.name}</span>
            </div>
        )
    }
}

export default Hero
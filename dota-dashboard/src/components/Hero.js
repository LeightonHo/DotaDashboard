import React, {Component} from 'react'

class Hero extends Component {
    render() {
        return (
            <div className='hero'> 
                <span>{this.props.name}</span>
                <img src={this.props.img_url} />
            </div>
        )
    }
}

export default Hero
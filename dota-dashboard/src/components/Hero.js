import React, {Component} from 'react'

class Hero extends Component {
    render() {
        return (
            <div className='column is-one-fifth hero'> 
                <div className='icon'>
                    <img src={this.props.img_url} />
                </div>
                <div className='name'>
                    <span>{this.props.name}</span>
                </div>
            </div>
        )
    }
}

export default Hero
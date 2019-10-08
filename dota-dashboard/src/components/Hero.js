import React, { Component } from "react"
import "../styles/hero.scss"

class Hero extends Component {
    render() {
        return (
            <div className="column is-2"> 
                <div className="icon">
                    <img src={this.props.img_url} alt="" />
                </div>
                <div>
                    <span className="name">{this.props.name}</span>
                </div>
            </div>
        )
    }
}

export default Hero
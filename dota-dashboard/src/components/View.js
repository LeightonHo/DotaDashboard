import React, { Component } from "react"

class View extends Component {
    render() {
        return (
            <button>{this.props.viewName}</button>
        )
    }
}

export default View
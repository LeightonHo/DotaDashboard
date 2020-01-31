import React, { Component } from "react"
import View from "./View"

class ViewSelector extends Component {
    render() {
        return (
            <div>
                <View viewName="Match history" />
                <View viewName="Timeline" />
            </div>
        )
    }
}

export default ViewSelector
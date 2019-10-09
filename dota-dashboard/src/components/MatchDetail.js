import React, {Component} from "react"
import "../styles/match.scss"

class MatchDetail extends Component {
    render () {
        return (
            <div className="match-detail">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Hero</th>
                            <th>Kills</th>
                            <th>Deaths</th>
                            <th>Assists</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Pudge</td>
                            <td>11</td>
                            <td>22</td>
                            <td>33</td>
                        </tr>
                        <tr>
                            <td>Pudge</td>
                            <td>11</td>
                            <td>22</td>
                            <td>33</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }    
}

export default MatchDetail
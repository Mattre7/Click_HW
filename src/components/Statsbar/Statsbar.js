import React, {Component} from 'react';
import './Statsbar.css';

class Statsbar extends Component {
    render () {
        return (
            <div className="statsbar container-fluid">
            <div className="row">
                <h2 className="col-md-4 score text-center">Top Score: {this.props.topscore}</h2>
                <div className="col-md-4"></div>
                <h2 className="col-md-4 score text-center">Current Score: {this.props.score}</h2>
            </div>
            </div>
        )
    }
}

export default Statsbar
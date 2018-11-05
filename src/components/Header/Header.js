import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <div className="jumbotron-fluid header text-center">
                <h1 className="maintitle">Lakers Click Game</h1>
            </div>
        )
    }
}

export default Header
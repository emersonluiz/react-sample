import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class Toolbar extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand">@</span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className={(this.props.title === 'Home') ? 'nav-item active' : 'nav-item'}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={(this.props.title === 'Person') ? 'nav-item active' : 'nav-item'}>
                            <Link className="nav-link" to="/person">Person</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
        );
    }
}
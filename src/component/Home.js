import React, { Component } from 'react';

import { Toolbar } from './Toolbar';

export class Home extends Component {

    render() {
        return (
            <div>
                <Toolbar title="Home" />

                <div className="container-fluid">

                    <br />

                    <h1>Home</h1>

                </div>
            </div>
        );
    }
}
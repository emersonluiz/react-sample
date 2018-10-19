import React, { Component } from 'react';

import { Form } from './Form';
import { Table } from './Table';
import { Toolbar } from './Toolbar';

export class Person extends Component {

    render() {
        return (
            <div>
                <Toolbar title="Person" />

                <div className="container-fluid">

                    <br />

                    <h1>Person Register</h1>

                    <br />

                    <Form />

                    <br />

                    <Table />

                </div>
            </div>
        );
    }

}
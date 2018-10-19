import React, { Component } from 'react';
import Axios from 'axios';
import PubSub from 'pubsub-js'

import { Field } from './Field';

export class Form extends Component {

    constructor() {
        super();
        this.state = {name:'', age:''};
        this.add = this.add.bind(this)
        this.setName = this.setName.bind(this);
        this.setAge = this.setAge.bind(this);
    }

    add(event) {
        event.preventDefault();

        let data = {name: this.state.name, age: this.state.age}

        Axios.post("http://localhost:3001/persons", data)
        .then(res => {
            console.log("SUCCESS");
            this.setState({name:'', age:''});
            PubSub.publish('update-list', true);
        })
    }

    setName(event) {
        this.setState({name: event.target.value});
    }

    setAge(event) {
        this.setState({age: event.target.value});
    }

    render() {
        return(
            <form onSubmit={this.add} method="POST">
                <Field type="text" id="name" placeholder="Name" label="Name" value={this.state.name} onChange={this.setName} />
                <Field type="number" id="age" placeholder="Age" label="Age" value={this.state.age} onChange={this.setAge} />
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
}
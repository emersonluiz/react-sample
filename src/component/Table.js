import React, { Component } from 'react';
import Axios from 'axios';
import PubSub from 'pubsub-js'

export class Table extends Component {

    constructor() {
        super();
        this.state = {list:[]};
        this.load = this.load.bind(this);
    }

    componentWillMount() {
        this.load();

        PubSub.subscribe('update-list', () => {
            this.load();
        })
    }

    load() {
        Axios.get("http://localhost:3001/persons")
        .then(res => {
            this.setState({list:res.data});
            console.log(res)
        })
    }

    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        this.state.list.map(item => {
                            return(
                                <tr key={item._id}>
                                    <th scope="row">{item._id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                </tr>
                            );
                        })
                    }

                </tbody>
            </table>
        );
    }
}
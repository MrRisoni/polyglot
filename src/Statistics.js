import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fetched: false
        };

        this.endPoint = 'https://shielded-brook-92440.herokuapp.com';
        //  this.endPoint =  'http://localhost:3500';
    }

    componentDidMount() {
        const self = this;

        axios.get(self.endPoint + '/api/statistics').then(rsp => {
            self.setState({
                data: rsp.data,
                fetched: true
            })
        })
    }

    render() {
        return (
            <section>

                {this.state.fetched &&
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Language</th>
                        <th>Total Words</th>
                        <th>Due</th>
                        <th>Total Avg Due</th>
                        <th>Translated to</th>
                        <th>Level Statistics</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((dt) => {
                        return (<tr key={dt.lang}>
                            <td>{dt.lang}</td>
                            <td>{dt.totalWords}</td>
                            <td>{dt.dueCount}</td>
                            <td>{dt.avgDue}</td>
                            <td>{dt.totalStats}</td>
                            <td>{dt.lvlsCount}</td>
                        </tr>)
                    })}
                    </tbody>
                </table>
                }

                <ul>
                    <li>
                        <Link to="/flash">Flashcards</Link>
                    </li>
                    <li>
                        <Link to="/newword">New Word</Link>
                    </li>
                </ul>

            </section>

        );
    }
}

export default Statistics;



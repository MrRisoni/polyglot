import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Language from "./Language";

class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fetched: false
        };

        this.endPoint =  'https://fathomless-oasis-08873.herokuapp.com';
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
                    <div className="row">
                    {this.state.data.map((lang) => {
                        return (<div className="col-4">
                            <Language key={lang.lanId} data={lang}/>
                         </div>);
                    })}
                    </div>

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



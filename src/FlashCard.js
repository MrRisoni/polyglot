import React, { Component } from 'react';
import Line from './Line.js';


class FlashCard extends Component {

    constructor(props) {
        super(props);
    }


    render() {


        return (
            <section>

                <div className="row">
                    <div className="col-8">
                        <div className="jumbotron flashCard">
                            <h1 className="display-4"><b>спутник</b></h1>
                            <br />
                            <br />
                            <br />

                            <h1 className="display-4"><p className="transltr">companion</p></h1>


                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-1 offset-1">

                        <button type="button" className="btn btn-danger">Hard</button>
                    </div>
                    <div className="col-1">

                        <button type="button" className="btn btn-warning">Medium</button>
                    </div>

                    <div className="col-1">

                        <button type="button" className="btn btn-primary">Easy  </button>
                    </div>
                    <div className="col-2">

                        <button type="button" className="btn btn-success">Very Easy</button>
                    </div>

                </div>
            </section>
        );
    }
}

export default FlashCard;

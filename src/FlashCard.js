import React, {Component} from 'react';
import axios from 'axios';

class FlashCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            counter: 0,
            fetched: false,
            showHints: false,
            showExample:false,
            avgDueText:0,
        };

        this.clickShowHints = this.clickShowHints.bind(this);
        this.clickNextCard = this.clickNextCard.bind(this);

    }

    clickNextCard()
    {
        let newCounter = this.state.counter;
        newCounter++;
        this.setState({
            counter: newCounter
        })
    }

    clickShowHints()
    {
        this.setState({
            showHints: true
        })
    }

    componentDidMount() {
        const self = this;
        // 'http://localhost:3500/api/wordsdue/4'
        axios.get('https://shielded-brook-92440.herokuapp.com/api/wordsdue/4').then(rsp => {
            console.log(rsp.data);
            self.setState({
                cards: rsp.data,
                fetched: true
            })
        })
    }

    render() {


        return (
            <main>

                {this.state.fetched &&
                    <section>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <div className="jumbotron flashCard">
                                    <h1 className="display-4"><b>{this.state.cards[this.state.counter].wordString}</b></h1>
                                    <br/>
                                    <br/>
                                    <br/>

                                    {this.state.showHints &&
                                        <ul id="hints">
                                            <li className="transltr">companion</li>
                                            <li className="transltr">companion</li>
                                        </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                }

                <div className="row" id="OptionButtons">
                    <div className="col-2 offset-4">
                        <button type="button" className="btn btn-warning" onClick={this.clickShowHints}>Hints</button>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger">Example</button>
                    </div>
                </div>


                {this.state.fetched &&
                    <div className="row offset-4" id="OptionButtons">
                        Show in
                        <div className="col-9 ">
                            <div className="form-group">
                                <input type="text" className="form-control" id="textDays"
                                       value={this.state.cards[this.state.counter].avgDue}/>
                            </div>
                            <button type="button" className="btn btn-danger" onClick={this.clickNextCard}>Next Card</button>
                        </div>
                    </div>
                }


                {/* <div className="row" id="OptionButtons">
                    <div className="col-1 offset-4">

                        <button type="button" className="btn btn-danger">Hard</button>
                    </div>
                    <div className="col-1">

                        <button type="button" className="btn btn-warning">Medium</button>
                    </div>

                    <div className="col-1">

                        <button type="button" className="btn btn-primary">Easy</button>
                    </div>
                    <div className="col-2">

                        <button type="button" className="btn btn-success">Very Easy</button>
                    </div>
                </div> */}


                <div className="row">
                    <div className="col-9 offset-4">
                        Total Cards:{this.state.cards.length} cards , Styding now  #{this.state.counter+1}
                    </div>
                </div>
            </main>
        );
    }
}

export default FlashCard;

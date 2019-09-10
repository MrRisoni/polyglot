import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

class FlashCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            translations:[],
            langsList:[],
            counter: 0,
            chosenLangId : 4,
            fetched: false,
            showHints: false,
            showExample:false,
            avgDueText:0,
            hints:[],
            properTranslation:'',
        };

        this.clickShowHints = this.clickShowHints.bind(this);
        this.clickNextCard = this.clickNextCard.bind(this);
        this.fetchWords = this.fetchWords.bind(this);
        this.chooseLang = this.chooseLang.bind(this);


    }

    clickNextCard()
    {
        let newCounter = this.state.counter;
        newCounter++;

        let properTranslation = this.state.translations.filter( tr => tr.wordId == this.state.cards[newCounter].wordId)[0].meaning;
        let hints = [properTranslation];

        let shuffledTranslations = _.shuffle( this.state.translations);

        let maxHints = 5;
        for (let hc =0 ; hc< Math.min(maxHints, shuffledTranslations.length); hc++) {
            hints.push(shuffledTranslations[hc].meaning)
        }

        this.setState({
            counter: newCounter,
            showHints: false,
            hints: _.shuffle(hints),
            showExample: false
        })
    }

    clickShowHints()
    {
        this.setState({
            showHints: true
        })
    }


    fetchWords(lgId) {
        const self = this;
        console.log('fetchWords of ' + lgId);

        // 'http://localhost:3500/api/wordsdue/4'
        axios.get('https://shielded-brook-92440.herokuapp.com/api/wordsdue/' + lgId).then(rsp => {
            self.setState({
                cards: rsp.data,
                fetched: true,
                chosenLangId: lgId
            })
        });
    }


    chooseLang(ev)
    {
        this.fetchWords(ev.target.value);
    }

    componentDidMount() {
        const self = this;
        // 'http://localhost:3500/api/wordsdue/4'
        axios.get('https://shielded-brook-92440.herokuapp.com/api/wordsdue/' + this.state.chosenLangId).then(rsp => {
            console.log(rsp.data);
            self.setState({
                cards: rsp.data,
                fetched: true
            })
        });


        axios.get('https://shielded-brook-92440.herokuapp.com/api/transtl/4').then(rsp => {
            self.setState({
                translations: rsp.data,
            })
        });

        axios.get('https://shielded-brook-92440.herokuapp.com/api/langs').then(rsp => {
            self.setState({
                langsList: rsp.data,
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
                                            {this.state.hints.map((hnt) => {
                                                return (<li className="transltr">{hnt}</li>)
                                            })}
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
                        <div className="col-4 ">
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


                <div className="row" id="langChooser">
                    <div className="col-4 offset-4" >
                            <label htmlFor="exampleFormControlSelect1">Choose Language</label>
                            <select className="form-control" id="exampleFormControlSelect1" onChange={this.chooseLang}>
                                {this.state.langsList.map((lg) => {
                                    return (<option selected={lg.id== this.state.chosenLangId} value={lg.id}>{lg.title}</option>)
                                })}
                            </select>

                    </div>
                </div>
            </main>
        );
    }
}

export default FlashCard;

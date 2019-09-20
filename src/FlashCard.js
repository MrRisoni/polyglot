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
            currentWordId:0,
            fetched: false,
            showHints: false,
            showExample:false,
            showTranslation:false,
            avgDueText:0,
            hints:[],
            properTranslation:'',
        };

        this.clickShowHints = this.clickShowHints.bind(this);
        this.clickNextCard = this.clickNextCard.bind(this);
        this.fetchWords = this.fetchWords.bind(this);
        this.fetchTranslations= this.fetchTranslations.bind(this);

        this.chooseLang = this.chooseLang.bind(this);

        this.endPoint =  'https://shielded-brook-92440.herokuapp.com';
      //  this.endPoint =  'http://localhost:3500';

        this.changeAvgDays = this.changeAvgDays.bind(this);

        this.updateDays = this.updateDays.bind(this);

        this.clickShowTranslation = this.clickShowTranslation.bind(this);
    }

    clickShowTranslation()
    {
        this.setState({
            showTranslation: true
        })
    }


    updateDays()
    {

        const self = this;
        console.log(this.state.avgDueText + ' ' + this.state.currentWordId);
        axios.post(this.endPoint + '/api/update_due', {
            wordId: this.state.currentWordId,
            due: this.state.avgDueText
        }).then(foo => {
            console.log('ok');
            self.clickNextCard();
        })
    }

    changeAvgDays(ev) {
        this.setState({
            avgDueText: ev.target.value
        })
    }

    clickNextCard()
    {
        let newCounter = this.state.counter;
        newCounter++;

        if (newCounter == this.state.cards.length) {
            newCounter =0;
        }

        let properTranslation = '';
        const properTranslationObj = this.state.translations.filter( tr => tr.wordId == this.state.cards[newCounter].wordId);
        if (properTranslationObj.length >0) {
             properTranslation = this.state.translations.filter(tr => tr.wordId == this.state.cards[newCounter].wordId)[0].meaning;
        }

        let hints = [properTranslation];


        let shuffledTranslations = this.state.translations.filter(tr => tr.posId == this.state.cards[newCounter].posId );
        shuffledTranslations = _.shuffle( shuffledTranslations);


        let maxHints = 5;
        for (let hc =0 ; hc< Math.min(maxHints, shuffledTranslations.length); hc++) {
            console.log(shuffledTranslations[hc]);
            hints.push(shuffledTranslations[hc].meaning)
        }

        this.setState({
            counter: newCounter,
            currentWordId: this.state.cards[newCounter].wordId,
            showHints: false,
            hints: _.shuffle(hints),
            showExample: false,
            showTranslation: false,
            properTranslation:properTranslation,
            avgDueText: this.state.cards[this.state.counter].avgDue
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

        axios.get(self.endPoint + '/api/wordsdue/' + lgId).then(rsp => {
            self.setState({
                cards: rsp.data,
                fetched: true,
                chosenLangId: lgId,
                currentWordId: rsp.data[0].wordId,
                counter:0

            })
        });
    }


    fetchTranslations(lgId) {
        const self = this;

        axios.get(self.endPoint + '/api/transtl/' + lgId).then(rsp => {
           self.setState({
                translations: rsp.data,
            })
        });

    }



    chooseLang(ev)
    {
       this.fetchWords(ev.target.value);
        this.fetchTranslations(ev.target.value);

    }

    componentDidMount() {
        const self = this;

        this.fetchWords(4);
        this.fetchTranslations(4);


        axios.get(self.endPoint +  '/api/langs').then(rsp => {
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

                                    {this.state.showTranslation &&
                                     <h1 className="display-4 translationTxt"><b>{this.state.properTranslation}</b></h1>
                                    }

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
                    <div className="col-2 offset-3">
                        <button type="button" className="btn btn-warning" onClick={this.clickShowHints}>Hints</button>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-primary" onClick={this.clickShowTranslation}>Translate</button>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger">Example</button>
                    </div>
                </div>


                {this.state.fetched &&
                <section>
                    <div className="row offset-4" id="OptionButtons">
                        Show in
                        <div className="col-4 ">
                            <div className="form-group">
                                <input type="text" className="form-control" id="textDays"
                                       onChange={this.changeAvgDays}
                                       value={this.state.avgDueText}/>
                            </div>

                        </div>
                        <div className="col-4 ">
                            <button type="button" className="btn btn-primary" onClick={this.updateDays}>Update
                            </button>
                        </div>
                    </div>

                    <div className="row offset-4" id="OptionButtons">
                        <button type="button" className="btn btn-danger" onClick={this.clickNextCard}>Next Card</button>
                    </div>
                </section>

                }


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
                                    return (<option key={lg.id} selected={lg.id== this.state.chosenLangId} value={lg.id}>{lg.title}</option>)
                                })}
                            </select>

                    </div>
                </div>
            </main>
        );
    }
}

export default FlashCard;

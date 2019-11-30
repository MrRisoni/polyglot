import React, {Component} from 'react';
import axios from 'axios';

class NewWord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            langsList: [],
            langsListForeign: [],
            posList:[],
            chosenPosId: 0,
            foreignLangId: 0,
            transLangId: 0,
            meaning: '',
            pronounce: '',
            comment: '',
            stem: '',
            foreign: '',
            example:'',
            level: 'X',
        };

        this.endPoint =  'http://localhost:3500';

        this.chooseLangForeign = this.chooseLangForeign.bind(this);
        this.chooseLangTrans = this.chooseLangTrans.bind(this);

        this.handleChangeForeign = this.handleChangeForeign.bind(this);
        this.handleChangePronounce = this.handleChangePronounce.bind(this);
        this.handleChangeTranslate = this.handleChangeTranslate.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleChangeStem = this.handleChangeStem.bind(this);
        this.handleChangePOS = this.handleChangePOS.bind(this);
        this.handleChangeLevel = this.handleChangeLevel.bind(this);
        this.handleChangeExample = this.handleChangeExample.bind(this);

        this.saveWord = this.saveWord.bind(this);

    }

    saveWord() {
        console.log();
        const self = this;
        axios.post(this.endPoint + '/api/newword', this.state).then(foo => {
            console.log('ok');
            self.setState({
                foreign: '',
                stem: '',
                comment: '',
                pronounce: '',
                meaning: '',
                example: ''
            })
        })

    }

    handleChangeLevel(ev) {
        this.setState({level: ev.target.value});
    }

    handleChangePOS(ev) {
        this.setState({chosenPosId: ev.target.value});
    }

    handleChangeForeign(ev) {
        this.setState({foreign: ev.target.value});
    }


    handleChangePronounce(ev) {
        this.setState({pronounce: ev.target.value});
    }

    handleChangeStem(ev) {
        this.setState({stem: ev.target.value});
    }

    handleChangeTranslate(ev) {
        this.setState({meaning: ev.target.value});
    }

    handleChangeComment(ev) {
        this.setState({comment: ev.target.value});
    }


    handleChangeExample(ev){
        this.setState({example: ev.target.value});
    }


    chooseLangForeign(ev) {
        console.log(ev.target.value);
        this.setState({foreignLangId: ev.target.value});
        if (ev.target.value >=11) {
            this.setState({transLangId: 5});
        }
        if (ev.target.value ==5 ) {
            this.setState({transLangId: 2});
        }
        if (ev.target.value ==4) {
            this.setState({transLangId: 1});
        }
    }

    chooseLangTrans(ev) {
        this.setState({transLangId: ev.target.value});
    }


    componentDidMount() {
        const self = this;

        axios.get(self.endPoint + '/api/langs').then(rsp => {
            self.setState({
                langsListForeign: rsp.data,
            });
        });


        axios.get(self.endPoint + '/api/langsall').then(rsp => {
            self.setState({
                langsList: rsp.data,
            });
        });

        axios.get(self.endPoint + '/api/pos').then(rsp => {
            self.setState({
                posList: rsp.data,
            });
        });
    }

    render() {
        return (
            <section>

                <div className="row" id="langChooser">
                    <div className="col-4 offset-4">
                        <label htmlFor="selectForeign">Choose Foreign Language</label>
                        <select className="form-control" id="selectForeign" onChange={this.chooseLangForeign}>
                            <option key={0} value='0'>Choose</option>

                            {this.state.langsListForeign.map((lg) => {
                                return (<option key={lg.id} value={lg.id}>{lg.title}</option>)
                            })}
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 offset-4 form-group">
                        <label htmlFor="foreignWord">Foreign Word</label>
                        <input type="text" className="form-control" id="foreignWord"
                               placeholder="Foreign Word" value={this.state.foreign}
                               onChange={this.handleChangeForeign}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 offset-4">
                        {this.state.foreignLangId >= 11 &&
                            <p>å æ ø ä ö ü é</p>
                        }
                        {this.state.transLangId == 5 &&
                            <p>ä ö ü ß </p>
                        }

                    </div>
                </div>



                <div className="row">
                    <div className="col-4 offset-4 form-group">
                        <label htmlFor="translate">Translation</label>
                        <input type="text" className="form-control" id="translate"
                               placeholder="Translation" value={this.state.meaning}
                               onChange={this.handleChangeTranslate}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-9">
                        <label htmlFor="translate">Example</label>
                        <input type="text" className="form-control" id="example"
                               placeholder="Example" value={this.state.example}
                               onChange={this.handleChangeExample}/>
                    </div>
                </div>



                <div className="row" id="langChooser">
                    <div className="col-4 offset-4">
                        <label htmlFor="selectPOS">Choose POS</label>
                        <select className="form-control" id="selectPOS" onChange={this.handleChangePOS}>
                            <option key={0} value='0'>Choose</option>
                            {this.state.posList.map((ps) => {
                                return (<option key={ps.id} selected={ps.title.indexOf("Undefined") > -1} value={ps.id}>{ps.title}</option>)
                            })}
                        </select>
                    </div>
                </div>

                <div className="row" id="langChooser">
                    <div className="col-4 offset-4">
                        <label htmlFor="selectLevel">Choose Level</label>
                        <select className="form-control" id="selectLevel" onChange={this.handleChangeLevel}>
                            <option key={0} value='0'>X</option>
                            <option key={1} value='A'>A1-A2</option>
                            <option key={2} value='B'>B1-B2</option>
                            <option key={2} value='C'>C1-C2</option>
                        </select>
                    </div>
                </div>


                {this.state.foreignLangId == 4 &&
                    <div className="row">
                        <div className="col-4 offset-4 form-group">
                            <label htmlFor="pronounce">Pronounciation</label>
                            <input type="text" className="form-control" id="pronounce"
                                   placeholder="Pronounciation" value={this.state.pronounce}
                                   onChange={this.handleChangePronounce}/>
                        </div>
                    </div>
                }

                {this.state.foreignLangId == 4 &&
                    <div className="row">
                        <div className="col-4 offset-4 form-group">
                            <label htmlFor="Stem">Stem</label>
                            <input type="text" className="form-control" id="Stem"
                                   placeholder="Stem" value={this.state.stem} onChange={this.handleChangeStem}/>
                        </div>
                    </div>
                }


                <div className="row" id="langChooser">
                    <div className="col-4 offset-4">
                        <label htmlFor="selectTranslate">Choose Translation Language</label>
                        <select className="form-control" id="selectTranslate" onChange={this.chooseLangTrans}>
                            <option key={0} value='0'>Choose</option>
                            {this.state.langsList.map((lg) => {
                                return (<option key={lg.id} selected={lg.id == this.state.transLangId} value={lg.id}>{lg.title}</option>)
                            })}
                        </select>
                    </div>
                </div>


                {this.state.foreignLangId == 4 &&
                    <div className="row">
                        <div className="col-4 offset-4 form-group">
                            <label htmlFor="comment">Comments</label>
                            <input type="text" className="form-control" id="comment"
                                   placeholder="Comments" value={this.state.comment} onChange={this.handleChangeComment}/>
                        </div>
                    </div>
                }


                <div className="row">
                    <div className="col-4 offset-4">
                        <button type="button" className="btn btn-primary" onClick={this.saveWord}>Save
                        </button>
                    </div>
                </div>


            </section>

        );
    }
}

export default NewWord;



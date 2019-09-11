import React, {Component} from 'react';
import axios from "axios";

class NewWord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            langsList:[],
            foreignLangId:0,
            transLangId:0,
            meaning:'',
            pronounce:'',
            comment:'',
            stem:'',
            foreign:''
        };

        this.endPoint =  'https://shielded-brook-92440.herokuapp.com';

        this.chooseLangForeign = this.chooseLangForeign.bind(this);
        this.chooseLangTrans = this.chooseLangTrans.bind(this);

        this.handleChangeForeign = this.handleChangeForeign.bind(this);
        this.handleChangePronounce = this.handleChangePronounce.bind(this);
        this.handleChangeTranslate = this.handleChangeTranslate.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleChangeStem = this.handleChangeStem.bind(this);

        this.saveWord = this.saveWord.bind(this);

    }

    saveWord()
    {

    }
    
    handleChangeForeign(ev){
        this.setState({ foreign: ev.target.value});
    }


    handleChangePronounce(ev){
        this.setState({ pronounce: ev.target.value});
    }

    handleChangeStem(ev){
        this.setState({ stem: ev.target.value});
    }

    handleChangeTranslate(ev){
        this.setState({ meaning: ev.target.value});
    }

    handleChangeComment(ev){
        this.setState({ comment: ev.target.value});
    }


    chooseLangForeign(ev){
        this.setState({foreignLangId: ev.target.value});
    }

    chooseLangTrans(ev){
        this.setState({transLangId: ev.target.value});
    }


    componentDidMount() {
        const self = this;

             axios.get(self.endPoint +  '/api/langs').then(rsp => {
            self.setState({
                langsList: rsp.data,
            })
        })
    }

    render() {
        return (
            <section>

                <div className="row" id="langChooser">
                    <div className="col-4 offset-4" >
                        <label htmlFor="selectForeign">Choose Foreign Language</label>
                        <select className="form-control" id="selectForeign" onChange={this.chooseLangForeign}>
                            {this.state.langsList.map((lg) => {
                                return (<option key={lg.id}  value={lg.id}>{lg.title}</option>)
                            })}
                        </select>

                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Foreign Word</label>
                    <input type="email" className="form-control" id="foreignWord"
                           placeholder="Foreign Word" value={this.state.foreign} onChange={this.handleChangeForeign}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Pronounciation</label>
                    <input type="email" className="form-control" id="pronounce"
                           placeholder="Pronounciation" value={this.state.pronounce} onChange={this.handleChangePronounce}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Stem</label>
                    <input type="email" className="form-control" id="Stem"
                           placeholder="Stem" value={this.state.stem} onChange={this.handleChangeStem}/>
                </div>


                <div className="row" id="langChooser">
                    <div className="col-4 offset-4" >
                        <label htmlFor="selectTranslate">Choose Translation Language</label>
                        <select className="form-control" id="selectTranslate" onChange={this.chooseLangTrans}>
                            {this.state.langsList.map((lg) => {
                                return (<option key={lg.id}  value={lg.id}>{lg.title}</option>)
                            })}
                        </select>

                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Translation</label>
                    <input type="email" className="form-control" id="translate"
                           placeholder="Translation" value={this.state.meaning} onChange={this.handleChangeTranslate}/>
                </div>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Comments</label>
                    <input type="email" className="form-control" id="comment"
                           placeholder="Comments"value={this.state.comment} onChange={this.handleChangeComment} />
                </div>


                <div className="row">
                    <div className="col-4 ">
                        <button type="button" className="btn btn-primary" onClick={this.saveWord}>Save
                        </button>
                    </div>
                </div>




            </section>

        );
    }
}

export default NewWord;



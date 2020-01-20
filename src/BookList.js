import React, {Component} from 'react';
import axios from "axios";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            langsList: [],
            formats:[],
            fetched: false,
            chosenLangId:0,
            chosenFormatId:1,

        };

        this.chooseLang = this.chooseLang.bind(this);
        this.chooseFormat = this.chooseFormat.bind(this);





        this.endPoint = 'http://localhost:3500';

        this.endPoint = 'http://fathomless-oasis-08873.herokuapp.com';

    }


    chooseFormat(ev)
    {

    }


    chooseLang(ev)
    {

    }

    componentDidMount() {
        const self = this;

        axios.get(self.endPoint + '/api/books_wip').then(rsp => {
            self.setState({
                books: rsp.data,
                fetched: true
            })
        })

        axios.get(self.endPoint + '/api/langsall').then(rsp => {
            self.setState({
                langsList: rsp.data,
            });
        });

        axios.get(self.endPoint + '/api/formats').then(rsp => {
            self.setState({
                formats: rsp.data,
            });
        });


    }


    render() {
        return (
            <section>
                {this.state.fetched &&

                <div>

                    <div className="row" id="langChooser">
                        <div className="col-4 offset-4" >
                            <select className="form-control" id="langChooser" onChange={this.chooseLang}>
                                {this.state.langsList.map((lg) => {
                                    return (<option key={lg.id} selected={lg.id== this.state.chosenLangId} value={lg.id}>{lg.title}</option>)
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="row" id="formatChooser">
                        <div className="col-4 offset-4" >
                            <select className="form-control" id="formatChooser" onChange={this.chooseFormat}>
                                {this.state.formats.map((fr) => {
                                    return (<option key={fr.Id} selected={fr.id== this.state.chosenFormatId} value={fr.Id}>{fr.title}</option>)
                                })}
                            </select>
                        </div>
                    </div>

                    {this.state.books.map((bk) => {
                        var prog = (bk.currentPage * 100 / bk.pagesTotal).toFixed(2);
                        return (<div className="row bookRow">
                            <div className="col-12">

                                <div className="card">
                                    <div className="card-header">
                                        {bk.title}
                                    </div>
                                    <div className="card-body">

                                        <img className="bookImg"
                                             src={process.env.PUBLIC_URL + '/assets/potter.jpg'}/>

                                    </div>
                                    <div className="card-footer">
                                        Progress {prog}% : {bk.currentPage}/{bk.pagesTotal}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                </div>

                }

            </section>

        );
    }
}

export default BookList;



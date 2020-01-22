import React, {Component} from 'react';
import axios from "axios";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            langsList: [],
            formats:[],
            authors:[],
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

        axios.get(self.endPoint + '/api/reading').then(rsp => {
            self.setState({
                books: rsp.data[0],
                langsList: rsp.data[1],
                formats: rsp.data[2],
                authors: rsp.data[3],
                fetched: true
            })
        })



    }


    render() {
        return (
            <section>
                {this.state.fetched &&

                <div>

                    <div className="row" id="langChooser">
                        <div className="col-4 offset-4" >
                            <select className="form-control" id="langChooser" onChange={this.chooseLang}>
                                <option key="0" value="0">All</option>
                                {this.state.langsList.map((lg) => {
                                    return (<option key={lg.id} selected={lg.id== this.state.chosenLangId} value={lg.id}>{lg.title}</option>)
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="row" id="formatChooser">
                        <div className="col-4 offset-4" >
                            <select className="form-control" id="formatChooser" onChange={this.chooseFormat}>
                                <option key="0" value="0">All</option>
                                {this.state.formats.map((fr) => {
                                    return (<option key={fr.Id} selected={fr.id== this.state.chosenFormatId} value={fr.Id}>{fr.title}</option>)
                                })}
                            </select>
                        </div>
                    </div>


                    <div className="row" id="authorChooser">
                        <div className="col-4 offset-4" >
                            <select className="form-control" id="authorChooser" onChange={this.chooseAuthor}>
                                <option key="0" value="0">All</option>
                                {this.state.authors.map((auth) => {
                                    return (<option key={auth.id} selected={auth.id== this.state.chosenFormatId} value={auth.id}>{auth.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>

                    {this.state.books.map((bk) => {
                        var prog = (bk.currentPage * 100 / bk.pagesTotal).toFixed(2);
                        var ImgPath = process.env.PUBLIC_URL + '/assets/books/' + bk.code  + '.jpg';

                        return (<div className="row bookRow">
                            <div className="col-12">

                                <div className="card">
                                    <div className="card-header bookTitle">
                                        {bk.title}
                                    </div>
                                    <div className="card-body">


                                        <img className="bookImg"
                                             src={ImgPath}/>

                                    </div>
                                    <div className="card-footer bookTitle">
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



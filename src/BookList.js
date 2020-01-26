import React, {Component} from 'react';
import axios from 'axios';
import BookItem from './BookItem';

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            booksFiltered: [],
            langsList: [],
            formats:[],
            authors:[],
            fetched: false,
            chosenLangId:0,
            chosenFormatId:0,
            chosenAuthorId:0,


        };

        this.chooseLang = this.chooseLang.bind(this);
        this.chooseFormat = this.chooseFormat.bind(this);
        this.chooseAuthor = this.chooseAuthor.bind(this);


        this.filterBooks = this.filterBooks.bind(this)


        this.endPoint = 'http://localhost:3500';

       this.endPoint = 'http://fathomless-oasis-08873.herokuapp.com';

    }


    filterBooks()
    {
        console.log(this.state.chosenAuthorId + ' ' + this.state.chosenFormatId +  ' ' + this.state.chosenLangId )


        var filteredList =  [];
        if (this.state.fetched) {
            this.state.books.forEach((bk) => {
                var matchesLang = (bk.bok_lang_id == this.state.chosenLangId) || (this.state.chosenLangId==0);
                var matchesFormat = (bk.bok_format_id == this.state.chosenFormatId) || (this.state.chosenFormatId==0);
                var matchesAuth= (bk.bok_author_id == this.state.chosenAuthorId) || (this.state.chosenAuthorId==0);

                var criteriaMatch = matchesAuth && matchesFormat && matchesLang;

                console.log(matchesAuth + ' ' + matchesFormat + ' ' + matchesLang)
                if (criteriaMatch) {
                    filteredList.push(bk)
                }

            })

        }

        this.setState({booksFiltered : filteredList});

    }


    chooseAuthor(ev)
    {
        this.setState({chosenAuthorId : ev.target.value})
    }


    chooseFormat(ev)
    {
        this.setState({chosenFormatId : ev.target.value})
    }


    chooseLang(ev)
    {
        this.setState({chosenLangId : ev.target.value})

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

                    <div className="row chooserOptions" id="langChooser">
                        <div className="col-4 offset-4" >
                            <select className="form-control" id="langChooser" onChange={this.chooseLang}>
                                <option key="0" value="0">All</option>
                                {this.state.langsList.map((lg) => {
                                    return (<option key={lg.id} selected={lg.id== this.state.chosenLangId} value={lg.id}>{lg.title}</option>)
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="row chooserOptions" id="formatChooser">
                        <div className="col-4 offset-4" >
                            <select className="form-control" id="formatChooser" onChange={this.chooseFormat}>
                                <option key="0" value="0">All</option>
                                {this.state.formats.map((fr) => {
                                    return (<option key={fr.Id} selected={fr.id== this.state.chosenFormatId} value={fr.Id}>{fr.title}</option>)
                                })}
                            </select>
                        </div>
                    </div>


                    <div className="row chooserOptions" id="authorChooser">
                        <div className="col-4 offset-4" >
                            <select className="form-control" id="authorChooser" onChange={this.chooseAuthor}>
                                <option key="0" value="0">All</option>
                                {this.state.authors.map((auth) => {
                                    return (<option key={auth.id} selected={auth.id== this.state.chosenFormatId} value={auth.id}>{auth.name}</option>)
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="row" id="authorChooser">
                        <div className="col-4 offset-5" >
                            <button type="button" className="btn btn-primary" onClick={this.filterBooks}>Filter</button>

                        </div>
                    </div>

                    {this.state.booksFiltered.map((bk) => {
                            return (<BookItem boekItm={bk}/>);

                    })}
                </div>

                }

            </section>

        );
    }
}

export default BookList;



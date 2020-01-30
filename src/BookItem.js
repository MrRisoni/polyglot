import React, {Component} from 'react';
import axios from "axios";

class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            newPage:0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.updateProgress = this.updateProgress.bind(this);



        this.endPoint = 'http://localhost:3500';
        this.endPoint = 'http://fathomless-oasis-08873.herokuapp.com';


    }

    handleChange(ev)
    {
        this.setState({newPage: ev.target.value});

    }

    updateProgress()
    {


        const self = this;
        axios.post(this.endPoint + '/api/save_progress', {newPage:this.state.newPage, bookId:this.props.boekItm.Id}).then(foo => {
            console.log('ok');

        })
    }


    render() {
        let bk = this.props.boekItm;

        console.log(bk);
        console.log(bk.auth.name);

        var prog = (bk.currentPage * 100 / bk.pagesTotal).toFixed(2);
        var ImgPath = process.env.PUBLIC_URL + '/assets/books/' + bk.code  + '.jpg';
        return (<div className="row bookRow">
            <div className="col-12">

                <div className="card">
                    <div className="card-header bookTitle">
                        {bk.title} | {bk.auth.name} | {bk.lang.title} | {bk.code}
                    </div>
                    <div className="card-body">


                        <img className="bookImg"
                             src={ImgPath}/>

                    </div>
                    <div className="card-footer bookTitle">
                        <div className="row">
                            <div className="col-3">
                                Progress {prog}% : {bk.currentPage}/{bk.pagesTotal}
                            </div>
                            <div className="col-4">
                            <input type="text" className="form-control" id="example"
                                   value={this.state.newPage}
                                   onChange={this.handleChange}/>
                            </div>

                            <div className="col-3">
                                <button type="button" className="btn btn-sm btn-primary" onClick={this.updateProgress} >Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default BookItem;



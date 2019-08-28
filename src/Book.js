import React, { Component } from 'react';
import Line from './Line.js';


class Book extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const txtArray = this.props.txt.split('<br>');
    let pagesArray = [];
    for (let pg =1;pg<this.props.numPages; pg++) {
      if ( pg % 5 == 0) {
        pagesArray.push(pg);
      }
    }

    return (
      <section>
        <div className="row">

       

          <div className="col-10">
            {txtArray.map((elm, idx) => {
              return (<Line key={idx}
                dictionary={this.props.dictionary}
                lineText={elm} />);
            })}
          </div>


          <div className="col-md-auto">
            <h3>Chapters</h3>
            <ul>
              {this.props.chapters.map((elm, idx) => {
                return (<li key={idx}>
                  <a href='#'> {elm}</a>
                </li>);
              })}
            </ul>
            <br/>
            <h3>Pages</h3>
            <ul>
              {pagesArray.map((elm, idx) => {
                return (<li key={idx}>
                  <a href='#'> {elm}</a>
                </li>);
              })}
            </ul>

          </div>
         
        </div>


        <div className="row" id="pageSelection">
          <div className="col-sm">
            <button type="button" class="btn btn-sm btn-primary btnPage">Previous Chapter</button>
          </div>

          <div className="col-sm">
            <button type="button" class="btn btn-sm btn-primary btnPage">Previous Page</button>
          </div>

          <div className="col-sm">
            <button type="button" class="btn btn-sm btn-secondary btnPage">Next Page</button>
          </div>

          <div className="col-sm">
            <button type="button" class="btn btn-smbtn-secondary btnPage">Next Chapter</button>
          </div>

        </div>
      </section >
    );
  }
}

export default Book;

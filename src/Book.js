import React, {Component} from 'react';
import Line from './Line.js';


class Book extends Component {

  constructor(props) {
    super(props);   
  }
   

  render() {


    const txtArray = this.props.txt.split('<br>');
    console.log('print');
    console.log(txtArray);

 
  return (
    <div className="App">
          {txtArray.map( (elm,idx) => {
            return (<Line key={idx} 
              dictionary={this.props.dictionary}
              lineText={elm}/>);
          })}       
    </div>
  );
  }
}

export default Book;

import React, {Component} from 'react';
import Word from './Word.js';


class Line extends Component {

  constructor(props) {
    super(props);      
}

  render() {

    const wordList = this.props.lineText.split(" ");

  
  return (
   
    <div className="lineContainer"> 
        {wordList.map( (wrd,idx) => {
            return (<Word key={idx} lineNumber={this.props.lineNumber} 
              wordNumber={idx}
              w={wrd}/>);
        })}
    </div>
   
  );
  }
}

export default Line;

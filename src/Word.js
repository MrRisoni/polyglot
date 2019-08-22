import React, {Component} from 'react';

class Word extends Component {

  constructor(props) {
    super(props);
    this.clickWord  = this.clickWord.bind(this);
   
}

clickWord()
{
    console.log('Word ' + this.props.w + '  is clicked');
}

  render() {

  
  return (
 //   <div className="sameLine">{this.props.w}</div>
    <div className="sameLine" onClick={this.clickWord}>         
        {this.props.w}
    </div>

  );
  }
}

export default Word;

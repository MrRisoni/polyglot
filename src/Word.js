import React, {Component} from 'react';

class Word extends Component {

  constructor(props) {
    super(props);
    this.state = {
        transltr : ''
      
    }
    this.clickWord  = this.clickWord.bind(this);
   
}

clickWord()
{
    let wordClicked = this.props.w.replace(/<\/?[^>]+(>|$)/g, ""); // remove html tags
    wordClicked = wordClicked.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); //remove punctuation
   

    console.log('Word ' + wordClicked + '  is clicked');
    console.log(this.props.dictionary[wordClicked]);
    let tra = this.props.dictionary[wordClicked];
    if (tra === undefined)  {
        tra = '';
    }

    this.setState({
        transltr : tra
    });
}

  render() {

  
  return (
    <div className="wordClass" onClick={this.clickWord}>         
        
        <div className="verticalChild"
            dangerouslySetInnerHTML={{__html: this.props.w}}
        />

        <div className="verticalChild transltr">
            {this.state.transltr}
        </div>
        
    </div>

  );
  }
}

export default Word;

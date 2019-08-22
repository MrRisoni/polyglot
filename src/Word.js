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
    console.log('Word ' + this.props.w + '  is clicked');
    console.log(this.props.dictionary[this.props.w]);
    let tra = this.props.dictionary[this.props.w];
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
        
        <div class="verticalChild">
            {this.props.w}
        </div>

        <div class="verticalChild transltr">
            {this.state.transltr}
        </div>
        
    </div>

  );
  }
}

export default Word;

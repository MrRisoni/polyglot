import React, {Component} from 'react';
import Line from './Line.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
    
  };
   
}

  render() {

    let  txt = "Жил сапожник с женой и детьми у мужика на квартире. Ни дома своего, ни земли у <br>";
    txt += " него не было, и кормился он с семьею сапожной работой. Хлеб был дорогой, а работа "

    const txtArray = txt.split('<br>');
    console.log('print');
    console.log(txtArray);

  return (
    <div className="App">
      <header className="App-header">
       
          {txtArray.map( (elm,idx) => {
            return (<Line lineText={elm}/>);
          })}
       
      </header>
    </div>
  );
  }
}

export default App;

import React, {Component} from 'react';
import Line from './Line.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dictionary: {
        "Жил" : "lived" ,
        "сапожник" : "shoemaker",
        "сапожной" :  "shoemaker",
        "люди" : "Menschen",
        "мужика" : "wife",
        "квартире" : "Quartier",
        "дома" : "house",
        "своего" : "of his"
    
    }
  }
   
}

  render() {

    let txt = "<h1>Чем </h1> <h1>люди </h1> <h1>живы </h1> <br>";
    txt += "<h2>I</h2> <br>";
    txt += "Жил сапожник с женой и детьми у мужика на квартире. Ни дома своего, ни земли у <br>";
    txt += " него не было, и кормился он с семьею сапожной работой. Хлеб был дорогой, а работа "

    const txtArray = txt.split('<br>');
    console.log('print');
    console.log(txtArray);

 
  return (
    <div className="App">
          {txtArray.map( (elm,idx) => {
            return (<Line key={idx} 
              dictionary={this.state.dictionary}
              lineText={elm}/>);
          })}       
    </div>
  );
  }
}

export default App;

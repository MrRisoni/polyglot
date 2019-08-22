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

    let txtRU = `<h1>Чем </h1> <h1>люди </h1> <h1>живы </h1> <br>
    <h2>I</h2> <br>
    Жил сапожник с женой и детьми у мужика на квартире. Ни дома своего, ни земли у <br>
    него не было, и кормился он с семьею сапожной работой. Хлеб был дорогой, а работа`;


    let txtNO = `<h2>​FØRSTE</h2> <h2>HANDLING</h2><br>
Oppe i Sneen paa Fjeldvidderne. Taagen ligger tætt og tung; det er Regnvejr og halvmørkt.<br>
Brand, (sortklædt, med Stav og Skræppe, kravler sig frem vestover).<br>
En Bonde og hans halvvoxne Søn, (som har slaaet Følge med, er noget bagefter).<br>
<br>

<b>BONDEN</b>: raaber efter Brand <br>
Hej, Fremmedkarl, far ej saa fort! <br>
Hvor er du? <br>
<b>BRAND</b>: Her! <br>
<b>BONDEN</b>: Du gaar dig bort! <br>
Nu tykkner Skodden slig, at knappt<br>
en ser saa langt, som Staven rækker – <br>
<b>SØNNEN</b>:
Faer, her er Spriker! <br>
<b>BONDEN</b>:
Her er Sprækker! <br> `;

 const txt = txtNO;


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

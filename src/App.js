import React, {Component} from 'react';
import Book from './Book.js';


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
        "своего" : "of his",
        "Sneen" : "Schnee",
        "Fjeldvidderne" : "Felderberg",
        "Regnvejr" : "regnen",
        "halvmørkt" : "halbdunkel",
        "Fremmedkarl" : "Fremde",
        "Stav" : "Staff",
        "og" : "und",
        "vestover" : "Westen",
        "halvvoxne" : "halb erwachsene",
        "Faer" : "Vater",
        "Sprækker" : "fissures",
        "kravler" : "crawl",
        "sig" : "sich",
        "sortklædt" : "schwarzgekleidet",
        "hans" : "his",
        "med" : "mit"
    
    }
  }
   
}

  render() {

    const langAbbr = this.props.match.params.langAbbr;
    console.log(this.props.match.params);

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

    let txt = '';
    let chapters = [];
    let numPages = 0;

    if (langAbbr == 'ru') {
      txt = txtRU; 
      chapters = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
      numPages = 25;
    }
    if (langAbbr == 'no') {
      txt = txtNO; 
      chapters = ['I','II','III','IV','V'];
      numPages = 225;
    }

  return (
    <div className="App">
        
        <Book txt={txt} 
        chapters={chapters}
        numPages={numPages}
        dictionary={this.state.dictionary}/>


    </div>
  );
  }
}

export default App;

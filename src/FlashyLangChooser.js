import React, {Component} from 'react';
import Line from './Line.js';


class FlashyLangChooser extends Component {

  constructor(props) {
    super(props);   
  }
   

  render() {

 
  return (
    <section>
        <div className="row form-group">
            <label htmlFor="exampleFormControlSelect1">Select Languages</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option value='RU'>Russian</option>          
                <option value='NO'>Norwegian</option>            
            </select>
        </div>

        <div className="row">
            <button type="button" className="btn btn-primary">Begin</button>
        </div>
    </section>
  );
  }
}

export default FlashyLangChooser;

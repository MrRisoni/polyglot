import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FlashyLangChooser from './FlashyLangChooser';
import FlashCard from './FlashCard';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";


//<Route   path="/:langAbbr" component={App} />
//            <Route path="/flashes/flash" component={FlashCard}/>

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={FlashCard}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'),
);

serviceWorker.unregister();

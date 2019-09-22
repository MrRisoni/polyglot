import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FlashCard from './FlashCard';
import NewWord from './NewWord';
import Statistics from './Statistics';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Statistics}/>
            <Route exact path="/flash" component={FlashCard}/>
            <Route exact path="/newword" component={NewWord}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'),
);

serviceWorker.unregister();

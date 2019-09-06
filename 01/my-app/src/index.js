import * as serviceWorker from './serviceWorker';
import {state , subscribe} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {sendMessage} from './redux/state'
import {addNewTextMessage} from './redux/state'
import {BrowserRouter} from 'react-router-dom';




 let rerenderTree = (state) =>{

    ReactDOM.render(
        <BrowserRouter>
            <App  state              = {state} 
                  sendMessage        = {sendMessage}
                  addNewTextMessage  = {addNewTextMessage}
                  />
        </BrowserRouter>
    , document.getElementById('root'));
    };




rerenderTree(state);
subscribe(rerenderTree);
serviceWorker.unregister();

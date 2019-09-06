import * as serviceWorker from './serviceWorker';
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';




 let rerenderTree = (state) =>{

    ReactDOM.render(
        <BrowserRouter>
            <App  state              = {store.getState()} 
                  sendMessage        = {store.sendMessage.bind(store)}
                  addNewTextMessage  = {store.addNewTextMessage.bind(store)}
                  />
        </BrowserRouter>
    , document.getElementById('root'));
    };




rerenderTree(store.getState());
store.subscribe(rerenderTree);
serviceWorker.unregister();

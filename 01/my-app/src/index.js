import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';



 let rerenderTree = (state) =>{

    ReactDOM.render(
        <BrowserRouter>
            <App  state     = {store.getState()} 
                  dispatch  = {store.dispatch.bind(store)}
                  />
        </BrowserRouter>
    , document.getElementById('root'));
    };




rerenderTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderTree(state)
}
);
serviceWorker.unregister();

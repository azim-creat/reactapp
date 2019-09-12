import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/reduxStore';
import * as serviceWorker from './serviceWorker';
import Provider from './StoreContext';

let rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
        , document.getElementById('root'));
};

rerenderTree();

store.subscribe(() => {
    rerenderTree()
}
);
serviceWorker.unregister();

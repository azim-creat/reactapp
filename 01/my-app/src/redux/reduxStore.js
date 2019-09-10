import {combineReducers, createStore} from 'redux';
import dialogReducer from './dialogReducer';
import postReducer from './postReducer';

let redusers = combineReducers({
    dualogModul: dialogReducer,
    postModul: postReducer
}); 

let store = createStore(redusers);

export default store;
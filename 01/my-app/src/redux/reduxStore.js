import {combineReducers, createStore} from 'redux';
import dialogReducer from './dialogReducer';
import postReducer from './postReducer';

let redusers = combineReducers({
    dialogModul: dialogReducer,
    postsModul: postReducer
}); 

let store = createStore(redusers);

export default store;
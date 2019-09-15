import {combineReducers, createStore} from 'redux';
import dialogReducer from './dialogReducer';
import postReducer from './postReducer';
import professorsReducer from './professorsReducer';
import usersReducer from './usersReducer';

let redusers = combineReducers({
    dialogModul: dialogReducer,
    postsModul: postReducer,
    professorModul: professorsReducer,
    usersModul: usersReducer,
}); 

let store = createStore(redusers);
window.store = store;   
export default store;
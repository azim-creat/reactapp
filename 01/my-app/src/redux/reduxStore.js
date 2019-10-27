import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogReducer from './dialogReducer';
import postReducer from './postReducer';
import professorsReducer from './professorsReducer';
import usersReducer from './usersReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'



let reducers = combineReducers({
    dialogModul: dialogReducer,
    postsModul: postReducer,
    professorModul: professorsReducer,
    usersModul: usersReducer,
    profileModul: profileReducer,
    authModul: authReducer,
    form: formReducer,
    app: appReducer,
}); 

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;   
export default store;
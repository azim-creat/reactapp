import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main.jsx';
import Professors from './components/Professors/Professors.jsx';
import { Route } from 'react-router-dom';
import SuperDialogscContainer from './components/Dialogs/DialogsContainer';
import SuperPostsContainer from './components/Posts/PostsContainer';

const App = () => {
    return (
        <div className='main__grid'>
            <Header />
            <Sidebar />
            
            <div className='app_main_content'>
                <Route path='/main' component={Main} />
                <Route path='/professors' component={Professors} />
                <Route path='/dialogs' render={() => <SuperDialogscContainer />}/>
                <Route path='/posts' render={() => <SuperPostsContainer />}/>
            </div>
        </div>
    );
}
export default App;
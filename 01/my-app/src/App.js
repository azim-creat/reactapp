import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main.jsx';
import { Route } from 'react-router-dom';
import SuperDialogscContainer from './components/Dialogs/DialogsContainer';
import SuperPostsContainer from './components/Posts/PostsContainer';
import ProfessorsContainer from './components/Professors/ProfessorsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
    return (
        <div className='main__grid'>
            <HeaderContainer />
            <Sidebar />
            
            <div className='app_main_content'>
                <Route path='/main' component={Main} />
                <Route path='/dialogs' render={() => <SuperDialogscContainer />}/>
                <Route path='/posts' render={() => <SuperPostsContainer />}/>
                <Route path='/professors' render={() => <ProfessorsContainer />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
            </div>
        </div>
    );
}
export default App;
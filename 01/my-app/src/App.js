import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import './App.css';
import SuperDialogscContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Main from './components/Main/Main.jsx';
import PostsContainer from './components/Posts/PostsContainer';
import ProfessorsContainer from './components/Professors/ProfessorsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Preloader/Preloader'
import store from "./redux/reduxStore";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        } else {
            return (
                        <div className='main__grid'>
                            <HeaderContainer />
                            <Sidebar />

                            <div className='app_main_content'>
                                <Route path='/main' component={Main} />
                                <Route path='/dialogs' render={() => <SuperDialogscContainer />} />
                                <Route path='/login' render={() => <Login />} />
                                <Route path='/posts' render={() => <PostsContainer />} />
                                <Route path='/professors' render={() => <ProfessorsContainer />} />
                                <Route path='/users' render={() => <UsersContainer />} />
                                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                            </div>
                        </div>
                    
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);


import './App.css';

import React, { Component }     from 'react';
import { Route, withRouter }    from "react-router-dom";
import { connect }              from "react-redux";
import { compose }              from "redux";
import { initializeApp }        from './redux/appReducer';

import Login                    from './components/Login/Login';
import UsersContainer           from './components/Users/UsersContainer';
import Preloader                from './components/Preloader/Preloader'
import ProfessorsContainer      from './components/Professors/ProfessorsContainer';
import Sidebar                  from './components/Sidebar/Sidebar';
import Main                     from './components/Main/Main.jsx';
import PostsContainer           from './components/Posts/PostsContainer';
import HeaderContainer          from './components/Header/HeaderContainer';

import { BrowserRouter }        from 'react-router-dom';
import store                    from './redux/reduxStore';
import { Provider }             from 'react-redux';
import {withSuspense} from "./hoc/withSuspense";

const SuperDialogscContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



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
                        <Route path='/dialogs' render={withSuspense(SuperDialogscContainer )} />
                        <Route path='/login' render={() => <Login />} />
                        <Route path='/posts' render={() => <PostsContainer />} />
                        <Route path='/professors' render={() => <ProfessorsContainer />} />
                        <Route path='/users' render={() => <UsersContainer />} />
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
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


let AppComponent = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

let SamuraiJSApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}><AppComponent />
            </Provider>
        </BrowserRouter>
    )
} 

export default SamuraiJSApp
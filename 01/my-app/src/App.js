import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main.jsx';
import Professors from './components/Professors/Professors.jsx';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import PostsContainer from './components/Posts/PostsContainer';

function App(props) {
    return (
        
            <div className='main__grid'>

                <Header />
                <Sidebar />

            <div className='app_main_content'>
                    < Route path='/main' component={Main} />
                    < Route path='/professors' component={Professors} />
                    < Route path='/dialogs' render={ () => (
                                                            <DialogsContainer state = {props.state}
                                                                              dispatch = {props.dispatch}
                                                            />)
                                                    } 
                                                                    
                    />

                    <Route path='/posts' render={ () => <PostsContainer   state = {props.state}
                                                                          dispatch = {props.dispatch}
                                                    
                                                        />
                                                } 
                    />
                </div>



            </div>
        
    );
}

export default App;
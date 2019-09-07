import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main.jsx';
import Professors from './components/Professors/Professors.jsx';
import {Route} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Reports from './components/Reports/Reports';

function App(props) {
    return (
        
            <div className='main__grid'>

                <Header />
                <Sidebar />

                <div className='app_main_content'>
                    < Route path='/main' component={Main} />
                    < Route path='/professors' component={Professors} />
                    < Route path='/dialogs' render={ () => (
                                                            <Dialogs contacts      ={props.state.contacts}  
                                                                     messages      ={props.state.messages}
                                                                     newMessageText={props.state.newMessageText}
                                                                     sendMessage   ={props.sendMessage}
                                                                     dispatch      ={props.dispatch}
                                                            />)
                                                    } 
                                                                    
                    />

                    <Route path='/reports' render={ <Reports />

                                                  }       
                    />
                </div>



            </div>
        
    );
}

export default App;
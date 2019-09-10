import React from 'react'; 
import {sendMessageActionCreator , addNewTextMessageActionCreator} from './../../redux/dialogReducer' ;
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let textAreaOnchange = (message) =>{
        let action = addNewTextMessageActionCreator(message);
        props.dispatch(action);

    };


    return ( <Dialogs   sendMessage ={sendMessage}
                        textAreaOnchange ={textAreaOnchange} 
                        contacts ={props.state.contacts}
                        messages = {props.state.messages}      
                        newMessageText = {props.state.newMessageText}      
            />);
}



export default DialogsContainer; 
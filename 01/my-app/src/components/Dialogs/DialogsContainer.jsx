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
                        contacts ={props.state.dialogModul.contacts}
                        messages = {props.state.dialogModul.messages}      
                        newMessageText = {props.state.dialogModul.newMessageText}      
            />);
}



export default DialogsContainer; 
import React from 'react';
import { addNewTextMessageActionCreator, sendMessageActionCreator } from './../../redux/dialogReducer';
import Dialogs from './Dialogs';
//import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
//     return <StoreContext.Consumer>
//             { store => {
//                 let sendMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 }
//                 let textAreaOnchange = (message) => {
//                     let action = addNewTextMessageActionCreator(message);
//                     store.dispatch(action);
//                 }
//                 return <Dialogs sendMessage={sendMessage}
//                     textAreaOnchange={textAreaOnchange}
//                     contacts={store.getState().dialogModul.contacts}
//                     messages={store.getState().dialogModul.messages}
//                     newMessageText={store.getState().dialogModul.newMessageText}/>
//             }
//         }
//         </StoreContext.Consumer>
// };

let mapStateToProps =(state)=>{
    return {
        contacts: state.dialogModul.contacts,
        messages: state.dialogModul.messages,
        newMessageText: state.dialogModul.newMessageText
    }
}

let mapDispatchToProps =(dispatch)=>{
    return {
        sendMessage: () =>  {dispatch(sendMessageActionCreator())},
        textAreaOnchange: (message) => {let action = addNewTextMessageActionCreator(message);
                                dispatch(action);}
        
    }
}

const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);


//export default DialogsContainer; 
export default SuperDialogsContainer; 
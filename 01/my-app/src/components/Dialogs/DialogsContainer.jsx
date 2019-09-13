import React from 'react';
import { addNewTextMessageActionCreator, sendMessageActionCreator } from './../../redux/dialogReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return <StoreContext.Consumer>
            { store => {
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }
                let textAreaOnchange = (message) => {
                    let action = addNewTextMessageActionCreator(message);
                    store.dispatch(action);
                }
                return <Dialogs sendMessage={sendMessage}
                    textAreaOnchange={textAreaOnchange}
                    contacts={store.getState().contacts}
                    messages={store.getState().messages}
                    newMessageText={store.getState().newMessageText}/>
            }
        }
        </StoreContext.Consumer>
};
export default DialogsContainer; 
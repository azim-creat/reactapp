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
                    contacts={store.getState().dialogModul.contacts}
                    messages={store.getState().dialogModul.messages}
                    newMessageText={store.getState().dialogModul.newMessageText}/>
            }
        }
        </StoreContext.Consumer>
};
export default DialogsContainer; 
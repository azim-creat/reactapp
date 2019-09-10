const SEND_MESSAGE = 'SEND_MESSAGE';
const ADD_NEW_TEXT_MESSAGE = 'ADD_NEW_TEXT_MESSAGE';

export const sendMessageActionCreator = ()=>{
    return {
        type: SEND_MESSAGE
    }
};


export const addNewTextMessageActionCreator =(message)=>{
    return {
        type: ADD_NEW_TEXT_MESSAGE,
        newMassage: message

    }
};



export const dialogReducer =(state, action) => {
    if(action.type === SEND_MESSAGE){
        let newMessage = {
            id:6,
            message:state.newMessageText
        };
    
       state.messages.push(newMessage);
       state.newMessageText = '';
      

    } else if ( action.type === ADD_NEW_TEXT_MESSAGE ) {
       state.newMessageText= action.newMassage;
       }

    return state;
};

export default dialogReducer;

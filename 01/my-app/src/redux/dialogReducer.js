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


let initialithation = {
    contacts : [
        { id: 1, fullName: 'Sasha Petrovv' },
        { id: 2, fullName: 'Iosiv Stalin' },
        { id: 3, fullName: 'Engels Chyn' },
        { id: 4, fullName: 'Adolf Enshtein' },
        { id: 5, fullName: 'Mark Czykerberg' },
        { id: 6, fullName: 'Stiv Jobs' },
        { id: 7, fullName: 'Masha Rasputina' },
        { id: 8, fullName: 'Vladimir Pytin' }
    ],
    
    messages : [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Whats Up?' },
        { id: 3, message: 'Fine, What about you?' },
        { id: 4, message: 'Not bad' },
        { id: 5, message: 'Great' },
        { id: 6, message: 'By' },
    ],

    newMessageText :'Write down new message' 

};


export const dialogReducer =(state = initialithation, action) => {
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

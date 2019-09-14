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

    switch(action.type){
        case SEND_MESSAGE: 
        let newMessageText = state.newMessageText;
        return{
            ...state,
            newMessageText : '',
            messages: [ ...state.messages , { id:7,   message: newMessageText} ]
        }

        case  ADD_NEW_TEXT_MESSAGE:
            return{
                ...state,
                newMessageText: action.newMassage
            }
    }

    return state;
};

export default dialogReducer;

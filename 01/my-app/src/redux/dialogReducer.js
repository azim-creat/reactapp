const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessageActionCreator = (newMessageText) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    }
};



let initialithation = {
    contacts: [
        { id: 1, fullName: 'Sasha Petrovv' },
        { id: 2, fullName: 'Iosiv Stalin' },
        { id: 3, fullName: 'Engels Chyn' },
        { id: 4, fullName: 'Adolf Enshtein' },
        { id: 5, fullName: 'Mark Czykerberg' },
        { id: 6, fullName: 'Stiv Jobs' },
        { id: 7, fullName: 'Masha Rasputina' },
        { id: 8, fullName: 'Vladimir Pytin' }
    ],

    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Whats Up?' },
        { id: 3, message: 'Fine, What about you?' },
        { id: 4, message: 'Not bad' },
        { id: 5, message: 'Great' },
        { id: 6, message: 'By' },
    ]
};


export const dialogReducer = (state = initialithation, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageText = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: newMessageText }]
            }
            default :
            return state;
    };
    
};

export default dialogReducer;

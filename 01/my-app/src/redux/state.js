
let store ={

    _state : {
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
    
    },

    getState(){
        return this._state;
    },

    _callSubscriber (){
    
    },

    sendMessage (){

        let newMessage ={
            id:6,
            message: this._state.newMessageText
        };
    
        this._state.messages.push(newMessage);
        this._state.newMessageText = '';
        this._callSubscriber(this._state);
    },

    addNewTextMessage  (newMassage){

    

        this._state.newMessageText= newMassage;
    
        this._callSubscriber(this._state);
    },

    subscribe (observer){
        this._callSubscriber=observer
    }
};


export default store;
window.store = store;

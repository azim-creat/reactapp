
let store ={

    _state : {
        dialogModul :{
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

        postsModul :{
            postItems : [
                {id:1 , title: 'Title 1' , postText: 'Lorem upsumLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?'},

                {id:2 , title: 'Title 2' , postText: 'Lorem upsumLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?'},

                {id:3 , title: 'Title 3' , postText: 'Lorem upsumLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?'}
            ],

            newPostItem : {id: '' , title: '' , postText: ''}
        }
       


    
    },

    getState(){
        return this._state;
    },

    subscribe (observer){
        this._callSubscriber=observer
    },

    _callSubscriber (){
    
    },

    dispatch(action) {
        if(action.type === 'SEND_MESSAGE'){
            let newMessage ={
                id:6,
                message: this.getState().dialogModul.newMessageText
            };
        
            this.getState().dialogModul.messages.push(newMessage);
            this.getState().dialogModul.newMessageText = '';
            this._callSubscriber(this.getState());

        } else if ( action.type === 'ADD_NEW_TEXT_MESSAGE' ) {
            this.getState().dialogModul.newMessageText= action.newMassage;
            this._callSubscriber(this.getState());
        }
    }

    
};

/*Экспорт в Dialog для того чтобы  */
export const sendMessageActionCreator = ()=>{
    return {
        type: 'SEND_MESSAGE'
    }
};


export const addNewTextMessageActionCreator =(message)=>{
    return {
        type: 'ADD_NEW_TEXT_MESSAGE',
        newMassage: message

    }
};



export default store;
window.store = store;

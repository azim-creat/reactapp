
import dialogReducer from './dialogReducer';
import postReducer from './postReducer';
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

            title: '',
            textPost: ''
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

        this.getState().dialogModul = dialogReducer(this.getState().dialogModul , action);
        this.getState().postsModul = postReducer(this.getState().postsModul , action);
        this._callSubscriber(this.getState());

        }
    };

export default store;
window.store = store;

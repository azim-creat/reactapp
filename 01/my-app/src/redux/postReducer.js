const POST_POST = 'POST_POST';
const ADD_NEW_TITLE_TEXT = 'ADD_NEW_TITLE_TEXT';
const ADD_NEW_POST_TEXT = 'ADD_NEW_POST_TEXT';


export const postPostActionCreator =() =>{
    return {
        type: POST_POST
    }
};

export const addNewTitleTextActionCreator =(onchangeTitleText)=>{
    return {
        type: ADD_NEW_TITLE_TEXT,
        newTitleText: onchangeTitleText
    }
};
export const addNewPostTextActionCreator =(onchangePostText)=>{
    return {
        type: ADD_NEW_POST_TEXT,
        newPostText: onchangePostText
    }
};

let initialithation = {
    postItems : [
        {id:1 , title: 'Title 1' , postText: 'Lorem upsumLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?'},

        {id:2 , title: 'Title 2' , postText: 'Lorem upsumLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?'},

        {id:3 , title: 'Title 3' , postText: 'Lorem upsumLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?'}
    ],

    title: '',
    textPost: ''
};


const postReducer =(state = initialithation, action) =>{
    switch(action.type){
        case ADD_NEW_TITLE_TEXT:
            return{
                ...state,
                title: action.newTitleText,
            }
        case ADD_NEW_POST_TEXT:
            return {
                ...state,
                textPost : action.newPostText
            };
        case POST_POST:
            let title = state.title;
            let postText = state.postText
            return {
                ...state,
                title : '',
                textPost : '',
                postItems: [...state.postItems , {id:5, title: title , postText: postText}]
            };
        default :
        return state;
    }
    
    
} ;

export default postReducer;

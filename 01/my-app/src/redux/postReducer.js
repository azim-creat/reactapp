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


const postReducer =(state, action) =>{

    switch(action.type){
        case ADD_NEW_TITLE_TEXT:
            state.title = action.newTitleText;
            return state;
        case ADD_NEW_POST_TEXT:
            state.textPost = action.newPostText;
            return state;
        case POST_POST:
            let newPost = {
                id:4,
                title: state.title,
                postText: state.textPost
            };
        
            state.postItems.push(newPost);
            state.title = '';
            state.textPost = '';
            return state;
        default :
        return state;
    }
    
    
} ;

export default postReducer;

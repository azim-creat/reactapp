const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
export const addPostAC = (newPost)=>{
    return{
        type: ADD_POST,
        newPost
    }
}
export const deletePost = (postId) => ({type: DELETE_POST, postId})
let initialithation = {
    postItems : [
        {id:1 , title: 'Title 1' , postText: 'Lorem upsumLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?'},

        {id:2 , title: 'Title 2' , postText: 'Lorem upsumLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?'},

        {id:3 , title: 'Title 3' , postText: 'Lorem upsumLorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, rem reprehenderit explicabo cupiditate molestiae, porro exercitationem eveniet adipisci veniam dolorem praesentium dignissimos quibusdam voluptatem a necessitatibus minus vitae dicta facilis?'}
    ],
};


const postReducer =(state = initialithation, action) =>{
    switch(action.type){
        case ADD_POST :
            let newPost = action.newPost;
            return{
                ...state,
                postItems:[ ...state.postItems, {id:22, title:newPost.title, postText:newPost.postText}]
            }
        case DELETE_POST:
            return {...state, postItems: state.postItems.filter(p => p.id !== action.postId)
        }
        
        default :
        return state;
    }
    
    
} ;

export default postReducer;

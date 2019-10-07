import Posts from './Posts';
import { connect } from 'react-redux';
import {addPostAC} from '../../redux/postReducer'

const  mapStateToProps =(state) => {
    return{
        postItems : state.postsModul.postItems,
        
    }
}


const  mapDispatchToProps =(dispatch) => {
    return{    
        addPostTitle:(newPostTitle)=>{
            dispatch(addPostAC(newPostTitle))
        },
        // addPostText:(newPostText)=>{
        //     dispatch(addPostAC(newPostText))
        // }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
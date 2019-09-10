import React from 'react';
import {addNewTitleTextActionCreator,  postPostActionCreator , addNewPostTextActionCreator} from './../../redux/postReducer' 
import Posts from './Posts';


const  PostsContainer = (props) =>{

    let publishPost = () =>{
        props.dispatch(postPostActionCreator());
    }    
    let onchangeTitle = (onchangeTitleText) =>{
        let action = addNewTitleTextActionCreator(onchangeTitleText);
        props.dispatch(action);
    };

    let onchangePostText = (onchangePostText) =>{
        let action = addNewPostTextActionCreator(onchangePostText);
        props.dispatch(action);
    };


    return (<Posts  publishPost={publishPost}
                    onchangeTitle={onchangeTitle} 
                    onchangePostText={onchangePostText}
                    postItems ={props.state.postsModul.postItems}
                    currentPostText={props.state.postsModul.textPost}
                    currentTitleText={props.state.postsModul.title}
            />  );


}

export default PostsContainer;
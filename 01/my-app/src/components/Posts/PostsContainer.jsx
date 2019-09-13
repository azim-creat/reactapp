import React from 'react';
import { addNewTitleTextActionCreator, postPostActionCreator, addNewPostTextActionCreator } from './../../redux/postReducer'
import Posts from './Posts';
import StoreContext from '../../StoreContext'

const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let publishPost = () => {
                        store.dispatch(postPostActionCreator());
                    }
                    let onchangeTitle = (onchangeTitleText) => {
                        let action = addNewTitleTextActionCreator(onchangeTitleText);
                        store.dispatch(action);
                    }
                    let onchangePostText = (onchangePostText) => {
                        let action = addNewPostTextActionCreator(onchangePostText);
                        store.dispatch(action);
                    }
                    return <Posts publishPost={publishPost}
                        onchangeTitle={onchangeTitle}
                        onchangePostText={onchangePostText}
                        postItems={store.getState().postsModul.postItems}
                        currentPostText={store.getState().postsModul.textPost}
                        currentTitleText={store.getState().postsModul.title}/>
                }
            }
        </StoreContext.Consumer>
    )
};
export default PostsContainer;
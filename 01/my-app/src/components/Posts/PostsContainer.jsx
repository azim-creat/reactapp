import { addNewTitleTextActionCreator, postPostActionCreator, addNewPostTextActionCreator } from './../../redux/postReducer'
import Posts from './Posts';
//import StoreContext from '../../StoreContext'
import { connect } from 'react-redux';

// const PostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let publishPost = () => {
//                         store.dispatch(postPostActionCreator());
//                     }
//                     let onchangeTitle = (onchangeTitleText) => {
//                         let action = addNewTitleTextActionCreator(onchangeTitleText);
//                         store.dispatch(action);
//                     }
//                     let onchangePostText = (onchangePostText) => {
//                         let action = addNewPostTextActionCreator(onchangePostText);
//                         store.dispatch(action);
//                     }
//                     return <Posts publishPost={publishPost}
//                         onchangeTitle={onchangeTitle}
//                         onchangePostText={onchangePostText}
//                         postItems={store.getState().postsModul.postItems}
//                         currentPostText={store.getState().postsModul.textPost}
//                         currentTitleText={store.getState().postsModul.title}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };


const  mapStateToProps =(state) => {
    return{
        postItems : state.postsModul.postItems,
        currentPostText : state.postsModul.textPost,
        currentTitleText:state.postsModul.title
    }
}

const  mapDispatchToProps =(dispatch) => {
    return{
        publishPost: () =>{
            dispatch(postPostActionCreator());
        },
        onchangeTitle: (onchangeTitleText) =>{
            let action = addNewTitleTextActionCreator(onchangeTitleText);
                        dispatch(action);
        },
        onchangePostText: (onchangePostText) =>{
            let action = addNewPostTextActionCreator(onchangePostText);
                        dispatch(action);
        }
    }
}


const SuperPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);


//export default PostsContainer;
export default SuperPostsContainer;
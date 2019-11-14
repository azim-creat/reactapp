
import postReducer, {addPostAC, deletePost} from "./postReducer";
import {publishPost} from "./profileReducer"

import ReactDOM from "react-dom";
import App from "../App";
import React from "react";


let state = {
    postItems: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostAC("it-kamasutra.com");

    // 2. action
    let newState = postReducer(state, action);

    // 3. expectation
    expect(newState.postItems.length).toBe(5);

});




it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostAC({title:"Is New Title", postText:"Is New Post Text"});

    // 2. action
    let newState = postReducer(state, action);

    // 3. expectation
    expect(newState.postItems[4].title).toBe("Is New Title");
});


it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = postReducer(state, action);

    // 3. expectation
    expect(newState.postItems.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = postReducer(state, action);

    // 3. expectation
    expect(newState.postItems.length).toBe(4);
});




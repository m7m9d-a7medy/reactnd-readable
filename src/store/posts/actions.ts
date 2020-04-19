// src/store/chat/actions.ts

import { Post, PostActionTypes, VoteOptions, GET_POSTS, GET_POST, NEW_POST, DELETE_POST, UPDATE_POST, VOTE_POST } from './types'

export function getPosts(category: null | string): PostActionTypes {
    return {
        type: GET_POSTS,
        category,
    }
}

export function getPost(id: string): PostActionTypes {
    return {
        type: GET_POST,
        id,
    }
}

export function newPost(post: Post): PostActionTypes {
    return {
        type: NEW_POST,
        post,
    }
}

export function deletePost(id: string): PostActionTypes {
    return {
        type: DELETE_POST,
        id,
    }
}

export function updatePost(id: string, title: string, body: string): PostActionTypes {
    return {
        type: UPDATE_POST,
        id,
        title,
        body,
    }
}

export function votePost(id: string, option: VoteOptions): PostActionTypes {
    return {
        type: VOTE_POST,
        id,
        option,
    }
}
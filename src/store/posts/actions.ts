import { Post, PostActionTypes, VoteOptions, GET_POSTS, STORE_POSTS, GET_POST, PROCESS_NEW_POST, NEW_POST, DELETE_POST, UPDATE_POST, VOTE_POST, STORE_POST } from './types'

// API call actions, handled by the sagas
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

export function processNewPost(author: string, body: string, category: string, title: string): PostActionTypes {
    return {
        type: PROCESS_NEW_POST,
        author,
        body,
        category,
        title
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

// Side effects actions
export function storePosts(posts: Post[]): PostActionTypes {
    return {
        type: STORE_POSTS,
        posts,
    }
}

export function storePost(post: Post): PostActionTypes {
    return {
        type: STORE_POST,
        post,
    }
}
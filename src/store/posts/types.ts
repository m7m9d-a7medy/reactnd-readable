export interface Post {
    id: string;
    timestamp: number;
    title: string;
    body: string;
    author: string;
    voteScore: number;
    category: string;
    deleted: boolean;
}

export type PostsState = Post[]

export const GET_POSTS = 'GET_POSTS'
export const NEW_POST = 'NEW_POST'
export const PROCESS_NEW_POST = 'PROCESS_NEW_POST'
export const GET_POST = 'GET_POST'
export const VOTE_POST = 'VOTE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const STORE_POSTS = 'STORE_POSTS'
export const STORE_POST = 'STORE_POST'

export interface GetPostsAction {
    type: typeof GET_POSTS
    category: null | string
}

export interface StorePostsAction {
    type: typeof STORE_POSTS
    posts: Post[]
}

export interface NewPostAction {
    type: typeof NEW_POST
    post: Post
}

export interface ProcessNewPostAction {
    type: typeof PROCESS_NEW_POST
    author: string
    body: string
    category: string
    title: string
}

export interface GetPostAction {
    type: typeof GET_POST
    id: string
}

export interface StorePostAction {
    type: typeof STORE_POST
    post: Post
}

export type VoteOptions = 'upVote' | 'downVote'

export interface VotePostAction {
    type: typeof VOTE_POST
    id: string
    option: VoteOptions
}

export interface UpdatePostAction {
    type: typeof UPDATE_POST
    id: string
    title: string
    body: string
}

export interface DeletePostAction {
    type: typeof DELETE_POST
    id: string
}

export type PostActionTypes = DeletePostAction | GetPostsAction | GetPostAction | NewPostAction | VotePostAction | UpdatePostAction | StorePostsAction | StorePostAction | ProcessNewPostAction
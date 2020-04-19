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
export const GET_POST = 'GET_POST'
export const VOTE_POST = 'VOTE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

interface GetPostsAction {
    type: typeof GET_POSTS
    category: null | string
}

interface NewPostAction {
    type: typeof NEW_POST
    post: Post
}

interface GetPostAction {
    type: typeof GET_POST
    id: string
}

export type VoteOptions = 'upVote' | 'downVote'

interface VotePostAction {
    type: typeof VOTE_POST
    id: string
    option: VoteOptions
}

interface UpdatePostAction {
    type: typeof UPDATE_POST
    id: string
    title: string
    body: string
}

interface DeletePostAction {
    type: typeof DELETE_POST
    id: string
}

export type PostActionTypes = DeletePostAction | GetPostsAction | GetPostAction | NewPostAction | VotePostAction | UpdatePostAction
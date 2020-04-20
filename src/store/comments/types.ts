import { VoteOptions } from './../posts/types';

export interface Comment {
    id: string
    parentId: string
    timestamp: number
    body: string
    author: string
    voteScore: number
    deleted: boolean
    parentDeleted: boolean
}

export type CommentsState = Comment[]

export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_COMMENT = 'GET_COMMENT'
export const PROCESS_NEW_COMMENT = 'PROCESS_NEW_COMMENT'
export const NEW_COMMENT = 'NEW_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const STORE_COMMENTS = 'STORE_COMMENTS'
export const STORE_COMMENT = 'STORE_COMMENT'

export interface GetCommentsAction {
    type: typeof GET_COMMENTS
    id: string
}

export interface GetCommentAction {
    type: typeof GET_COMMENT
    commentId: string
}

export interface ProcessNewComment {
    type: typeof PROCESS_NEW_COMMENT
    body: string
    author: string
    parentId: string
}

export interface NewCommentAction {
    type: typeof NEW_COMMENT
    comment: Comment
}

export interface VoteCommentAction {
    type: typeof VOTE_COMMENT
    id: string
    option: VoteOptions
}

export interface UpdateCommentAction {
    type: typeof UPDATE_COMMENT
    id: string
    body: string
    timestamp: number
}

export interface DeleteCommentAction {
    type: typeof DELETE_COMMENT
    id: string
}

export interface StoreCommentsAction {
    type: typeof STORE_COMMENTS
    comments: CommentsState
}

export interface StoreCommentAction {
    type: typeof STORE_COMMENT
    comment: Comment
}

export type CommentActionTypes = GetCommentsAction | GetCommentAction | ProcessNewComment | NewCommentAction | UpdateCommentAction | VoteCommentAction | DeleteCommentAction | StoreCommentsAction | StoreCommentAction
import { VoteOptions } from './../posts/types';
import store from '..';

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
export const NEW_COMMENT = 'NEW_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const STORE_COMMENTS = 'STORE_COMMENTS'

export interface GetCommentsAction {
    type: typeof GET_COMMENTS
    id: string
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

export type CommentActionTypes = GetCommentsAction | NewCommentAction | UpdateCommentAction | VoteCommentAction | DeleteCommentAction | StoreCommentsAction
import { VoteOptions } from './../posts/types';
import { Comment, CommentActionTypes, GET_COMMENTS, NEW_COMMENT, VOTE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, STORE_COMMENTS, CommentsState } from './types';


export function getComments(id: string): CommentActionTypes {
    return {
        type: GET_COMMENTS,
        id,
    }
}

export function newComment(id: string, comment: Comment): CommentActionTypes {
    return {
        type: NEW_COMMENT,
        comment,
    }
}

export function voteComment(id: string, option: VoteOptions): CommentActionTypes {
    return {
        type: VOTE_COMMENT,
        id,
        option,
    }
}

export function updateComment(id: string, timestamp: number, body: string): CommentActionTypes {
    return {
        type: UPDATE_COMMENT,
        id,
        body,
        timestamp,
    }
}

export function deleteComment(id: string): CommentActionTypes {
    return {
        type: DELETE_COMMENT,
        id,
    }
}

export function storeComments(id: string, comments: CommentsState): CommentActionTypes {
    return {
        type: STORE_COMMENTS,
        comments,
    }
}
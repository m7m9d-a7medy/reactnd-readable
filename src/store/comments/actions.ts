import { VoteOptions } from './../posts/types';
import { Comment, CommentActionTypes, GET_COMMENTS, NEW_COMMENT, VOTE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, STORE_COMMENTS, CommentsState } from './types';


export function requestGetComments(id: string): CommentActionTypes {
    return {
        type: GET_COMMENTS,
        id,
    }
}

export function requestNewComment(id: string, comment: Comment): CommentActionTypes {
    return {
        type: NEW_COMMENT,
        comment,
    }
}

export function requestVoteComment(id: string, option: VoteOptions): CommentActionTypes {
    return {
        type: VOTE_COMMENT,
        id,
        option,
    }
}

export function requestUpdateComment(id: string, timestamp: number, body: string): CommentActionTypes {
    return {
        type: UPDATE_COMMENT,
        id,
        body,
        timestamp,
    }
}

export function requestDeleteComment(id: string): CommentActionTypes {
    return {
        type: DELETE_COMMENT,
        id,
    }
}

export function requestStoreComments(id: string, comments: CommentsState): CommentActionTypes {
    return {
        type: STORE_COMMENTS,
        comments,
    }
}
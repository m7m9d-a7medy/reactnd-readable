import { DeletePostAction, PostActionTypes } from './../posts/types';
import {
    CommentsState,
    CommentActionTypes,
    DeleteCommentAction,
    NewCommentAction,
    StoreCommentsAction,
    UpdateCommentAction,
    VoteCommentAction,
    STORE_COMMENTS,
    STORE_COMMENT,
    DELETE_COMMENT,
    NEW_COMMENT,
    UPDATE_COMMENT,
    VOTE_COMMENT,
    StoreCommentAction
} from './types'
import { DELETE_POST } from '../posts/types'

const initialState: CommentsState = []

function storeComments(state: CommentsState, action: StoreCommentsAction): CommentsState {
    return action.comments.filter(comment => !comment.deleted && !comment.parentDeleted)
}

function storeComment(state: CommentsState, action: StoreCommentAction): CommentsState {
    if (state.find(c => c.id === action.comment.id)) {
        return state.map(storedComment => {
            return storedComment.id !== action.comment.id
                ? storedComment
                : action.comment
        })
    } else {
        return state.concat([action.comment])
    }
}

function newComment(state: CommentsState, action: NewCommentAction): CommentsState {
    return state.concat([action.comment])
}

function updateComment(state: CommentsState, action: UpdateCommentAction): CommentsState {
    return state.map(storedComment => {
        return storedComment.id !== action.id
            ? storedComment
            : {
                ...storedComment,
                body: action.body
            }
    })
}

function deleteComment(state: CommentsState, action: DeleteCommentAction): CommentsState {
    return state.map(storedComment => {
        return storedComment.id !== action.id
            ? storedComment
            : {
                ...storedComment,
                deleted: true
            }
    })
        .filter(comment => !comment.deleted && !comment.parentDeleted)
}

function deletePost(state: CommentsState, action: DeletePostAction): CommentsState {
    return state.map(storedComment => {
        return storedComment.parentId !== action.id
            ? storedComment
            : {
                ...storedComment,
                parentDeleted: true
            }
    })
        .filter(comment => !comment.deleted && !comment.parentDeleted)
}

function voteComment(state: CommentsState, action: VoteCommentAction): CommentsState {
    return state.map(storedComment => {
        return storedComment.id !== action.id
            ? storedComment
            : {
                ...storedComment,
                voteScore: action.option === 'upVote'
                    ? storedComment.voteScore + 1
                    : storedComment.voteScore && storedComment.voteScore - 1
            }
    })
}

export default function Comments(
    state = initialState,
    action: CommentActionTypes | PostActionTypes
): CommentsState {
    switch (action.type) {
        case STORE_COMMENTS:
            return storeComments(state, action)
        case STORE_COMMENT:
            return storeComment(state, action)
        case NEW_COMMENT:
            return newComment(state, action)
        case DELETE_COMMENT:
            return deleteComment(state, action)
        case UPDATE_COMMENT:
            return updateComment(state, action)
        case VOTE_COMMENT:
            return voteComment(state, action)
        case DELETE_POST:
            return deletePost(state, action)
        default:
            return state
    }
}
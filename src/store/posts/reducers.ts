import {
    PostsState,
    PostActionTypes,
    GET_POSTS,
    GET_POST,
    NEW_POST,
    DELETE_POST,
    UPDATE_POST,
    VOTE_POST
} from './types'

const initialState: PostsState = []

export default function posts(
    state = initialState,
    action: PostActionTypes
): PostsState {
    return state
}
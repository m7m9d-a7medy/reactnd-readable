import {
    PostsState,
    PostActionTypes,
    StorePostsAction,
    StorePostAction,
    NewPostAction,
    DeletePostAction,
    UpdatePostAction,
    VotePostAction,
    STORE_POSTS,
    STORE_POST,
    NEW_POST,
    DELETE_POST,
    UPDATE_POST,
    VOTE_POST
} from './types'

const initialState: PostsState = []

function storePosts(state: PostsState, action: StorePostsAction): PostsState {
    return action.posts.filter(post => !post.deleted)
}

function storePost(state: PostsState, action: StorePostAction): PostsState {
    if (state.find(p => p.id === action.post.id)) {
        return state.map(storedPost => {
            return storedPost.id !== action.post.id
                ? storedPost
                : action.post
        })
    } else {
        return state.concat([action.post])
    }
}

function newPost(state: PostsState, action: NewPostAction): PostsState {
    return state.concat([action.post])
}

function updatePost(state: PostsState, action: UpdatePostAction): PostsState {
    return state.map(storedPost => {
        return storedPost.id !== action.id
            ? storedPost
            : {
                ...storedPost,
                title: action.title,
                body: action.body
            }
    })
}

function deletePost(state: PostsState, action: DeletePostAction): PostsState {
    return state.filter(storedPost => storedPost.id !== action.id)
}

function votePost(state: PostsState, action: VotePostAction): PostsState {
    return state.map(storedPost => {
        return storedPost.id !== action.id
            ? storedPost
            : {
                ...storedPost,
                voteScore: action.option === 'upVote'
                    ? storedPost.voteScore + 1
                    : storedPost.voteScore && storedPost.voteScore - 1
            }
    })
}

export default function posts(
    state = initialState,
    action: PostActionTypes
): PostsState {
    switch (action.type) {
        case STORE_POSTS:
            return storePosts(state, action)
        case STORE_POST:
            return storePost(state, action)
        case NEW_POST:
            return newPost(state, action)
        case DELETE_POST:
            return deletePost(state, action)
        case UPDATE_POST:
            return updatePost(state, action)
        case VOTE_POST:
            return votePost(state, action)
        default:
            return state
    }
}
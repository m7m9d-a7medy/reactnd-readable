
import { put, takeEvery } from 'redux-saga/effects'
import {
    getPosts,
} from '../../api'
import {
    GET_POSTS,
    GetPostsAction,/* 
    GetPostAction,
    NewPostAction,
    DeletePostAction,
    VotePostAction,
    UpdatePostAction */
} from './../posts/types';
import {
    storePosts
} from '../posts/actions'

function* getPostsSaga(action: GetPostsAction) {
    const { category } = action
    const { data } = yield getPosts(category)
    debugger
    yield console.log(data)
    yield put(storePosts(data))
}

/* function* getPostSaga(action: GetPostAction) {
    yield
}

function* newPostSaga(action: NewPostAction) {
    yield
}

function* updatePostSaga(action: UpdatePostAction) {
    yield
}

function* deletePostSaga(action: DeletePostAction) {
    yield
}

function* votePostSaga(action: VotePostAction) {
    yield
}
 */
export default function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga)
}
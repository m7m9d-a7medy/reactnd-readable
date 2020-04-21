import { v1 as uuid } from 'uuid'
import { ProcessNewPostAction, Post, PROCESS_NEW_POST, VOTE_POST, VotePostAction, DeletePostAction, DELETE_POST, GET_POST, GetPostAction, UpdatePostAction, UPDATE_POST, PostsState } from './types';

import { put, takeEvery } from 'redux-saga/effects'
import API from '../../api'

import {
    GET_POSTS,
    GetPostsAction
} from './../posts/types'

import {
    storePosts,
    storePost
} from '../posts/actions'

function* getPostsSaga(action: GetPostsAction) {
    const { category } = action
    const { data } = yield API.getPosts(category)
    yield put(storePosts(data as PostsState))
}

function* getPostSaga(action: GetPostAction) {
    const { data } = yield API.getPost(action.id)

    yield put(storePost(data as Post))
}

function* processNewPostSaga(action: ProcessNewPostAction) {
    const { title, body, category, author } = action
    const post: Post = {
        title,
        body,
        category,
        author,
        timestamp: new Date().getTime(),
        id: uuid(),
        deleted: false,
        voteScore: 0
    }

    const { data } = yield API.newPost(post)

    yield put(storePost(data as Post))
}

function* votePostSaga(action: VotePostAction) {
    yield API.votePost(action.id, action.option)

}

function* deletePostSaga(action: DeletePostAction) {
    yield API.deletePost(action.id)
}

function* updatePostSaga(action: UpdatePostAction) {
    yield API.updatePost(action.id, action.title, action.body)
}

export default function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga)
    yield takeEvery(GET_POST, getPostSaga)
    yield takeEvery(PROCESS_NEW_POST, processNewPostSaga)
    yield takeEvery(VOTE_POST, votePostSaga)
    yield takeEvery(DELETE_POST, deletePostSaga)
    yield takeEvery(UPDATE_POST, updatePostSaga)
}
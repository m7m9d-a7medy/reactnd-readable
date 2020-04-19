import { v1 as uuid } from 'uuid'
import { ProcessNewPostAction, Post, PROCESS_NEW_POST } from './types';

import { put, takeEvery } from 'redux-saga/effects'
import {
    getPosts,
    newPost
} from '../../api'

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
    const { data } = yield getPosts(category)
    yield console.log(data)
    yield put(storePosts(data))
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

    const { data } = yield newPost(post)
    yield put(storePost(post))
}

export default function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga)
    yield takeEvery(PROCESS_NEW_POST, processNewPostSaga)
}
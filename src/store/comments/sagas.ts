import { v1 as uuid } from 'uuid'
import { Comment, GET_COMMENT, GET_COMMENTS, GetCommentAction,GetCommentsAction, CommentsState, VoteCommentAction, VOTE_COMMENT, UpdateCommentAction, DeleteCommentAction, DELETE_COMMENT, UPDATE_COMMENT, PROCESS_NEW_COMMENT, ProcessNewComment } from './types';
import { takeEvery, put } from 'redux-saga/effects';
import API from '../../api';
import { storeComments, storeComment } from './actions'

function* getCommentsSaga(action: GetCommentsAction) {
    const { data } = yield API.getComments(action.id)
    console.log(data)
    yield put(storeComments(action.id, data as CommentsState))
}

function* getCommentSaga(action: GetCommentAction) {
    const { data } = yield API.getComment(action.commentId)
    console.log(data)
    yield put(storeComment(data as Comment))
}

function* voteCommentSaga(action: VoteCommentAction) {
    const { data } = yield API.voteComment(action.id, action.option)
    console.log(data)
}

function* deleteCommentSaga(action: DeleteCommentAction) {
    const { data } = yield API.deleteComment(action.id)
    console.log(data)
}

function* updateCommentSaga(action: UpdateCommentAction) {
    const { data } = yield API.updateComment(action.id, new Date().getTime(), action.body)
    console.log(data)
}

function* newCommentSaga(action: ProcessNewComment) {
    const comment: Comment = {
        id: uuid(),
        timestamp: new Date().getTime(),
        author: action.author,
        body: action.body,
        deleted: false,
        parentDeleted: false,
        parentId: action.parentId,
        voteScore: 1
    }

    const {data} = yield API.newComment(comment)
    console.log(data)
}

export default function* categoriesSaga() {
    yield takeEvery(GET_COMMENTS, getCommentsSaga)
    yield takeEvery(GET_COMMENT, getCommentSaga)
    yield takeEvery(PROCESS_NEW_COMMENT, newCommentSaga)
    yield takeEvery(VOTE_COMMENT, voteCommentSaga)
    yield takeEvery(DELETE_COMMENT, deleteCommentSaga)
    yield takeEvery(UPDATE_COMMENT, updateCommentSaga)
}
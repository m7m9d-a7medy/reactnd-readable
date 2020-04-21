import { GET_CATEGORIES, GetCategoriesAction, CategoriesState } from './types';
import { takeEvery, put } from 'redux-saga/effects';
import API from '../../api';
import { storeCategories } from './actions';

function* getCategoriesSaga(action: GetCategoriesAction) {
    const { data } = yield API.getCategories()
    yield put(storeCategories([...data.categories, { name: 'all', path: 'all' }] as CategoriesState))
}

export default function* categoriesSaga() {
    yield takeEvery(GET_CATEGORIES, getCategoriesSaga)
}
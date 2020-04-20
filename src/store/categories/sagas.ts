import { GET_CATEGORIES, GetCategoriesAction, CategoriesState } from './types';
import { takeEvery, put } from 'redux-saga/effects';
import { getCategories } from '../../api';
import { storeCategories } from './actions';

function* getCategoriesSaga(action: GetCategoriesAction) {
    const { data } = yield getCategories()
    console.log(data.categories)
    yield put(storeCategories(data.categories as CategoriesState))
}

export default function* categoriesSaga() {
    yield takeEvery(GET_CATEGORIES, getCategoriesSaga)
}
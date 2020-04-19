import { CategoryActionTypes, GET_CATEGORIES, CategoriesState, STORE_CATEGORIES } from './types';

export function getCategories(): CategoryActionTypes {
    return {
        type: GET_CATEGORIES,
    }
}

export function storeCategories(categories: CategoriesState): CategoryActionTypes {
    return {
        type: STORE_CATEGORIES,
        categories,
    }
}
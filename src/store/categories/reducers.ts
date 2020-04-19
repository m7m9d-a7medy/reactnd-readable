import { CategoriesState, CategoryActionTypes, STORE_CATEGORIES } from './types';

const initialState: CategoriesState = []

export default function categories(
    state: CategoriesState = initialState,
    action: CategoryActionTypes
): CategoriesState {
    switch (action.type) {
        case STORE_CATEGORIES:
            return action.categories

        default:
            return state
    }
}
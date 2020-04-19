export interface Category {
    name: string
    path: string
}

export type CategoriesState = Category[]

export const GET_CATEGORIES = 'GET_CATEGORIES'
export const STORE_CATEGORIES = 'STORE_CATEGORIES'

export interface GetCategoriesAction {
    type: typeof GET_CATEGORIES
}

export interface StoreCategoriesAction {
    type: typeof STORE_CATEGORIES
    categories: CategoriesState
}

export type CategoryActionTypes = GetCategoriesAction | StoreCategoriesAction
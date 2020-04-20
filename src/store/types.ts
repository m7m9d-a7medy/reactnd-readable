import { CommentsState } from './comments/types';
import { CategoriesState } from './categories/types';
import { PostsState } from './posts/types'

export interface State {
    posts: PostsState | undefined
    categories: CategoriesState | undefined
    comments: CommentsState | undefined
}
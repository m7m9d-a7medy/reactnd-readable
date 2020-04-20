import { combineReducers } from 'redux'
import posts from '../posts/reducers'
import categories from '../categories/reducers'
import comments from '../comments/reducers'

export default combineReducers({
    posts,
    categories,
    comments,
})
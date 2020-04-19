import { combineReducers } from 'redux'
import posts from '../posts/reducers'
import categories from '../categories/reducers'

export default combineReducers({
    posts,
    categories,
})
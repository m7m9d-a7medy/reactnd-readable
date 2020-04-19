import { combineReducers, createStore } from 'redux'
import posts from './posts/reducers'

const store = createStore(
    combineReducers({
        posts,
    })
)
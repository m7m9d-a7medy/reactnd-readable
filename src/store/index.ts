import { createStore } from 'redux'
import reducers from './reducers'
import middleware from './middleware'
import { runSagas } from './sagas'

export default createStore(reducers, middleware)

runSagas()
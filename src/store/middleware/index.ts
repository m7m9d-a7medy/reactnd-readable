import { applyMiddleware, compose } from 'redux'
import sagaMiddleware from '../sagas'


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default composeEnhancers(applyMiddleware(
    sagaMiddleware
))
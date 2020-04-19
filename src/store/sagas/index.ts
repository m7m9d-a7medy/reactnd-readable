import createSagaMiddleware from 'redux-saga'
import postsSaga from '../posts/sagas'

const sagaMiddleware = createSagaMiddleware()

export default sagaMiddleware

export function runSagas() {
    sagaMiddleware.run(postsSaga)
}
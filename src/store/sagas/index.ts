import createSagaMiddleware from 'redux-saga'
import postsSaga from '../posts/sagas'
import categoriesSaga from '../categories/sagas'
import commentsSaga from '../comments/sagas'

const sagaMiddleware = createSagaMiddleware()

export default sagaMiddleware

export function runSagas() {
    sagaMiddleware.run(postsSaga)
    sagaMiddleware.run(categoriesSaga)
    sagaMiddleware.run(commentsSaga)
}
import { createStore, compose, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';
import reducer from './rootReducer';
import rootSaga from './rootSaga'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSageMiddleware();

export type IRootState = ReturnType<typeof reducer>;

const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store;
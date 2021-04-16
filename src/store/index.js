
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './rootSaga';

// create the saga middleware
 const sagaMiddleware = createSagaMiddleware();
// mount it on the store
export const store = createStore(
 reducer,
 applyMiddleware(sagaMiddleware)
);
// run the saga
sagaMiddleware.run(rootSaga);
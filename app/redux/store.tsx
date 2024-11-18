import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import thunk from 'redux-thunk';
import { Middleware } from 'redux';


const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: Middleware[]) => applyMiddleware(...middleware);
// Redux: Store
const store = createStore(rootReducer, bindMiddleware([ sagaMiddleware]));
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga)
// Exports
export { store };

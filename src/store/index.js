import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

// list of middlewares for redux
const middlewares = [
    thunk,
    logger
]

// create redux store
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

export {
    store
}
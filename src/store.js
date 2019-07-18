import { createStore, applyMiddleware, combineReducers } from 'redux';
import { localStorageMiddleware, promiseMiddleware } from './middleware';

import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import settings from './reducers/settings';


const reducer = combineReducers({
    auth,
    common,
    home,
    settings
});

const store = createStore(reducer, applyMiddleware(promiseMiddleware, localStorageMiddleware));

export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import { promiseMiddleware } from './middleware';

const defaultState = { appName: 'CONDUIT',  articles: null };

const reducer = function(state = defaultState, action) {
    switch(action.type) {
        case 'HOME_PAGE_LOADED':
            return { ...state, articles: action.payload.articles };
    }
    return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
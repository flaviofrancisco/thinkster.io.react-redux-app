import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { HashRouter, BrowserRouter } from 'react-router-dom'

import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import store from './store';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter >                
            <App />
            <Route path="/" component={App}>
                <Route exact path="/" component ={Home} />
            </Route>
            <Route path="/login/" component={Login} />
        </BrowserRouter >
    </Provider>
), document.getElementById('root'));
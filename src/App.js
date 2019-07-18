import Header from './components/Header';
import Home from './components/Home';
import PropTypes from 'prop-types';
import React from 'react';
import agent from './agent';
import { connect } from 'react-redux';

import { Route, Switch } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Settings from './components/Settings';

const mapStateToProps = state => ({
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: 'APP_LOAD', payload, token }),
  onRedirect: () =>
    dispatch({ type: 'REDIRECT' })
});

class App extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      debugger;
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    return (
      <div>
        <Header
        currentUser={this.props.currentUser}
        appName={this.props.appName} />
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register} />
          <Route path="/settings/" component={Settings} />
        </Switch>
        {this.props.children}
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
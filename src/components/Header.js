'use strict';

import { Link } from 'react-router-dom';
import React from 'react';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Login" className="nav-link">
            Sign in
          </Link>
        </li>
        <li className="nav-item">
          <Link to="Login" className="nav-link">
            Register
          </Link>
        </li>        
      </ul>
    );
  } else 
  {
    return null;
  }  
}

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="editor" className="nav-link">
            <i className="ion-compose">&nbsp;New Post</i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="settings" className="nav-link">
          <i className="ion-gear-a">&nbsp;Settings</i>
          </Link>
        </li>        
        <li className="nav-item">
          <Link to={`@${props.currentUser.userName}`} className="nav-link" />
          <img src={props.currentUser.image} className="user-pic" />
          {props.currentUser.userName}
        </li>
      </ul>
    );
  } else 
  {
    return null;
  }  
}

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser}/>          
          <LoggedInView currentUser={this.props.currentUser}/>

        </div>
      </nav>
    );
  }
}

export default Header;
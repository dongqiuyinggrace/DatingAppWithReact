import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as authService from '../../../app/services/authService';


class NavBar extends Component {
  state = {
    account: {
      username: '',
      password: '',
    },
  };

  handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(this.state.account);
      window.location = '/';
      toast.success('Successfully logged in');
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        console.log(ex.response.statusText)
        toast.error('Unauthorized user');
      }
    }
  };

  handleChange = (e) => {
    let account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
    console.log(account.username);
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/';
  };

  render() {
    const { account } = this.state;
    const { authenticated } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Dating App
        </NavLink>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/matches">
              Matches
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/lists">
              Lists
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/messages">
              Messages
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.handleLogout}>
              Logout
            </a>
          </li>
        </ul>

        {authenticated && (
          <div className="dropdown">
            <a className="dropdown-toggle text-light">Welcome User</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                <i className="fa fa-user"></i>
                Edit Profile
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <i className="fa fa-sign-out"></i>
                Logout
              </a>
            </div>
          </div>
        )}

        {!authenticated && (
          <form
            className="form-inline mt-2 mt-md-0"
            onSubmit={this.handleLogin}
          >
            <input
              name="username"
              value={account.username}
              onChange={this.handleChange}
              className="form-control mr-sm-2"
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              value={account.password}
              onChange={this.handleChange}
              className="form-control mr-sm-2"
              type="password"
              placeholder="Password"
            />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Login
            </button>
          </form>
        )}
      </nav>
    );
  }
}

export default withRouter(NavBar);

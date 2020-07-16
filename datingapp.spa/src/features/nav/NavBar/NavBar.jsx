import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as authService from '../../../app/services/authService';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

class NavBar extends Component {
  state = {
    currentUser: null,
    account: {
      username: '',
      password: '',
    },
  };

  componentDidMount() {
    const user = authService.getCurrentUser();
    this.setState({currentUser: user});
  }

  handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.login(this.state.account);
      const user = authService.getCurrentUser();
      this.setState({currentUser: user});
      this.props.history.push('/members');
      toast.success('Successfully logged in');
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        toast.error('Unauthorized user');
      }
    }
  };

  handleChange = (e) => {
    let account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  handleLogout = () => {
    authService.logout();
    console.log(window.location);
    window.location = '/';
  };

  render() {
    const { account, currentUser } = this.state;
    console.log('render', currentUser);
    const authenticated = currentUser !== null ? true : false;
    

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Dating App
          </NavLink>
          {authenticated && (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/members">
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
            </ul>
          )}

          {authenticated && (
            <UncontrolledDropdown className="text-light">
              <DropdownToggle tag="a" caret className="dropdown-toggle">
                Welcome {currentUser.unique_name}
              </DropdownToggle>
              <DropdownMenu className="mt-5">
                <DropdownItem tag="a" href="#">
                  <i className="fa fa-user"></i>
                  Edit Profile
                </DropdownItem>
                <div className="dropdown-divider"></div>
                <DropdownItem
                  tag="a"
                  onClick={this.handleLogout}
                  className="dropdown-item"
                >
                  <i className="fa fa-sign-out"></i>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}

          {!authenticated && (
            <form
              className="form-inline mt-2 mt-md-0  ml-auto"
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
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);

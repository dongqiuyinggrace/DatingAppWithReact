import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {
  state = {
    account: {
      username: '',
      password: '',
    },
  };

  handleRegister = async (e) => {
    e.preventDefault();
    let { data } = await axios.post(
      'http://localhost:5000/api/auth/register',
      this.state.account
    );
    console.log(data);
  };

  handleChange = (e) => {
    let account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
    console.log(account.username);
  };

  handleCancel = () => {
    this.props.history.push('/');
  };

  render() {
    const { username, password } = this.state.account;
    return (
      <div className="row justify-content-center mt-5">
        <form onSubmit={this.handleRegister} className="col-4">
          <h2 className="text-center text-primary">Sign Up</h2>
          <hr />
          <div className="form-group">
            <input
              name="username"
              value={username}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              value={password}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group text-center">
            <button className="btn btn-success" type="submit">
              Register
            </button>
            <button
              className="btn btn-default"
              type="button"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;

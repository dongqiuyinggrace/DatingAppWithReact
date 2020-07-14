import React, { Component } from 'react';
import * as authService from '../../../app/services/authService';
import { toast } from 'react-toastify';

class RegisterForm extends Component {
  state = {
    account: {
      username: '',
      password: '',
    },
  };

  handleRegister = async (e) => {
    e.preventDefault();
    try {
      await authService.register(this.state.account);
      toast.success('Successfully registed');
    } catch(ex) {
      if(ex.response && ex.response.status === 400) {
        console.log(ex.response.data);
        toast.error('User Register failed');
      }
    }
    
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

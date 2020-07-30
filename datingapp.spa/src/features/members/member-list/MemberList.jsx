import React, { Component } from 'react';
import * as userService from '../../../app/services/userService';
import MemberCard from '../member-card/MemberCard';

class MemberList extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    const { data } = await userService.getUsers();
    this.setState({ users: data });
  }

  render() {
    const { users } = this.state;
    return (
      <div className='container mt-5'>
        <div className='row'>
          {users.map((user) => (
            <div  key={user.id} className='col-lg-2 col-md-3 col-sm-6'>
              <MemberCard user={user} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MemberList;

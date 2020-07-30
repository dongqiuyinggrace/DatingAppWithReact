import React from 'react';
import { Link } from 'react-router-dom';

const MemberCard = ({ user }) => {
  return (
    <div className='card mb-4'>
      <div className='card-img-wrapper'>
        <img src={user.photoUrl} className='card-img-top' alt={user.username} />
        <ul className='list-inline member-icons text-center'>
          <li className='list-inline-item'>
            <Link className='btn btn-primary' to={`/members/${user.id}`}>
              <i className='fa fa-user'></i>
            </Link>
          </li>
          <li className='list-inline-item'>
            <button className='btn btn-primary'>
              <i className='fa fa-heart'></i>
            </button>
          </li>
          <li className='list-inline-item'>
            <button className='btn btn-primary'>
              <i className='fa fa-envelope'></i>
            </button>
          </li>
        </ul>
      </div>
      <div className='card-body p-1'>
        <h6 className='card-title text-center mb-1'>
          {' ' + user.username}, {user.age}
        </h6>
        <p className='card-text text-muted text-center'>{user.city}</p>
      </div>
    </div>
  );
};

export default MemberCard;

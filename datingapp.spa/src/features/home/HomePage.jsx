import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="container text-center mt-5">
          <h1>Find your matches</h1>
          <p>
            Come on in to view your matches... All you need to do is sign up!
          </p>
          <Link to="/register" className="btn btn-primary mr-2">Register</Link>
          <Link to="/" className="btn btn-info">Learn More</Link>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;

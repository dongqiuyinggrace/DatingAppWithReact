import React, { Fragment, useState, useEffect } from 'react';
import NavBar from '../../features/nav/NavBar/NavBar';
import HomePage from '../../features/home/HomePage';
import { Route, Switch } from 'react-router-dom';
import RegisterForm from './../../features/auth/register/RegisterForm';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  })

  return (
    <Fragment>
      <NavBar authenticated={authenticated}/>
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Fragment>
  );
};

export default App;

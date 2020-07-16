import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../../features/nav/NavBar/NavBar';
import HomePage from '../../features/home/HomePage';
import RegisterForm from './../../features/auth/register/RegisterForm';
import MemberList from './../../features/member-list/MemberList';
import Lists from '../../features/lists/Lists';
import Messages from '../../features/messages/Messages';
import ProtectedRoute from '../common/ProtectedRoute';

const App = () => {
  return (
    <Fragment>
      <ToastContainer/>
      <NavBar />
      <Switch>
        <ProtectedRoute path="/members" component={MemberList} />
        <ProtectedRoute path="/lists" component={Lists} />
        <ProtectedRoute path="/messages" component={Messages} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Fragment>
  );
};

export default App;

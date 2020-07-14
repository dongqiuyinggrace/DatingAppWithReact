import axios from 'axios';
import http from './httpService';

const apiEndPoint = 'http://localhost:5000/api/auth/';

export const login = async (user) => {
  const { data: jwt } = await http.post(apiEndPoint + 'login', user);
  localStorage.setItem('token', jwt);
};

export const register = (user) => {
  return http.post(apiEndPoint + 'register', user);
};

export default {
  login,
  register,
};

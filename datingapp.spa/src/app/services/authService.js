import jwtDecode from 'jwt-decode';
import http from './httpService';

const apiEndPoint = 'http://localhost:5000/api/auth/';

export const login = async (user) => {
  const { data } = await http.post(apiEndPoint + 'login', user);
  localStorage.setItem('token', data.token);
};

export const logout = () => {
  localStorage.removeItem('token');
}

export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem('token');
    return jwtDecode(jwt);
  } catch(ex) {
    return null;
  }
  
}

export const register = (user) => {
  return http.post(apiEndPoint + 'register', user);
};

export default {
  login,
  logout,
  register,
  getCurrentUser
};

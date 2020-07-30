import http from './httpService';

export const getUsers = async () => {
    return await http.get('http://localhost:5000/api/users');
}

export const getUser = async (id) => {
  return await http.get('http://localhost:5000/api/users/' + id);
}

export default {
    getUsers,
    getUser
}
import axiosClient from './axiosClient';

const accountApi = {
  login: (data) => axiosClient.post('/api/account/login', data),
  register: (data) => axiosClient.post('/api/account/register', data),
};

export default accountApi;

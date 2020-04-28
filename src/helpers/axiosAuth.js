import axios from 'axios';
import fb from '../vendors/fb';

const axiosAuth = axios.create({
  baseURL:
    process.env.REACT_APP_URL || 'https://labspt-propman.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosAuth.interceptors.request.use(async config => {
  config.headers.authorization = await fb.auth().currentUser.getIdToken();
  return config;
});

export default axiosAuth;

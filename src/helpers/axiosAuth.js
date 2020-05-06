import axios from 'axios';
import firebase from '../vendors/fb';

const axiosAuth = axios.create({
  baseURL:
    process.env.REACT_APP_URL || 'https://labspt-propman.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosAuth.interceptors.request.use(async config => {
  config.headers.authorization = await firebase.auth().currentUser.getIdToken();
  return config;
});

export default axiosAuth;

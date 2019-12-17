import axios from 'axios';

export default function axiosAuth() {
  const token = localStorage.getItem('token');
  console.log('token:', token);

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
}

import axios from 'axios';
import queryString from 'query-string';

// Updated baseUrl
const baseUrl = 'https://kanbanserver-five.vercel.app/api/v1';

const getToken = () => localStorage.getItem('token');

const axiosClient = axios.create({
  baseURL: baseUrl,
  paramsSerializer: params => queryString.stringify(params) // Corrected params serialization
});

axiosClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}` // Ensure 'Authorization' is capitalized
    }
  };
});

axiosClient.interceptors.response.use(response => {
  if (response && response.data) return response.data;
  return response;
}, err => {
  if (!err.response) {
    alert('An error occurred.'); // Improved error alert message
  }
  throw err.response;
});

export default axiosClient;

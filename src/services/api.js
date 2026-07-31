import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
});

// Attach JWT to every request automatically, once logged in
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('flowerhub_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;

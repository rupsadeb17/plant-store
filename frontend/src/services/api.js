import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const plantAPI = {
  getAll: (params) => api.get('/plants', { params }),
  getById: (id) => api.get(`/plants/${id}`),
  create: (data) => api.post('/plants', data),
};
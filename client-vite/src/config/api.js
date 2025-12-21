const API_BASE_URL = import.meta.env.PROD 
  ? '' // Use relative URLs in production (Vercel handles routing)
  : 'http://localhost:4000';

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
};

export const getApiUrl = (endpoint) => {
  return import.meta.env.PROD 
    ? `/api${endpoint}` 
    : `${API_BASE_URL}/api${endpoint}`;
};
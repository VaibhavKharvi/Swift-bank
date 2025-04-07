import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication services
export const authService = {
  login: async (email, password) => {
    const response = await api.post('/auth', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },
  register: async (userData) => {
    const response = await api.post('/users', userData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },
  getCurrentUser: async () => {
    return await api.get('/auth');
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  isAuthenticated: () => {
    return localStorage.getItem('token') !== null;
  }
};

// Account services
export const accountService = {
  getAccounts: async () => {
    return await api.get('/accounts');
  },
  getAccount: async (id) => {
    return await api.get(`/accounts/${id}`);
  },
  createAccount: async (accountData) => {
    return await api.post('/accounts', accountData);
  },
  updateAccount: async (id, accountData) => {
    return await api.put(`/accounts/${id}`, accountData);
  },
  deleteAccount: async (id) => {
    return await api.delete(`/accounts/${id}`);
  }
};

// Transaction services
export const transactionService = {
  getTransactions: async () => {
    return await api.get('/transactions');
  },
  getAccountTransactions: async (accountId) => {
    return await api.get(`/transactions/account/${accountId}`);
  },
  deposit: async (transactionData) => {
    return await api.post('/transactions/deposit', transactionData);
  },
  withdraw: async (transactionData) => {
    return await api.post('/transactions/withdraw', transactionData);
  },
  transfer: async (transferData) => {
    return await api.post('/transactions/transfer', transferData);
  }
};

// User services
export const userService = {
  updateProfile: async (userData) => {
    return await api.put('/users', userData);
  }
};

export default api; 
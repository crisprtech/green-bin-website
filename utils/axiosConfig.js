import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecogreen-ouaj.onrender.com/api/v1',
    headers: {
        'Accept': 'application/json, application/octet-stream', // Accept images and videos
    },
    // timeout: 10000, // Optional: Set timeout
});

// Add request interceptor to include token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor for handling errors
api.interceptors.response.use(
    (response) => response, 
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.log('Unauthorized, redirecting to login...');
                // You can redirect user to login page if needed
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default api;

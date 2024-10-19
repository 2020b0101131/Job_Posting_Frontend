import axios from 'axios';

// Create an instance of axios with the base URL from the environment variable
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const token = localStorage.getItem('token');
// Service to register a user
export const registerUser = async (userData) => {
  try {
    const response = await api.post('api/users/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Service to verify email
export const verifyEmail = async (verificationData) => {
  try {
    const response = await api.post('api/users/verify-email', verificationData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Service to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/users/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


// Service to post a job
export const postJob = async (jobData) => {
  try {
    const response = await api.post('api/jobs/', jobData,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); 
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};


// Service to send emails
export const sendEmail = async (id) => {
  try {
    const response = await api.post(`api/emails/${id}/sendEmails`,null,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

import axios from 'axios';


const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const token = localStorage.getItem('token');


export const registerUser = async (userData) => {
  try {
    const response = await api.post('api/users/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


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


export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/users/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};



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

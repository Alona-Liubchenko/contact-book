import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeder = token => {
  axios.defaults.headers.common.Autorization = `Bearer ${token}`;
};

export const clearAuthHeder = () => {
  axios.defaults.headers.common.Autorization = '';
};

//POST  ​/users​/signup //Create a new user
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeder();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

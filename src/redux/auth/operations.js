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
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      setAuthHeder(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

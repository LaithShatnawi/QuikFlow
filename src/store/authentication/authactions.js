import { apiRequest } from 'services/api';
import * as base64 from 'base-64';

// Action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// Login Action
export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  // try {
  const response = await apiRequest(
    'POST',
    '/api/auth/login',
    {},
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${base64.encode(`${email}:${password}`)}`
      }
    }
  );
  console.log(response);
  dispatch({ type: LOGIN_SUCCESS, payload: response });
  localStorage.setItem('token', response.accessToken);
};

// Register Action
export const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const response = await apiRequest('POST', '/api/auth/register', { name, email, password });
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.response.data.message });
  }
};

// Logout Action
export const logout = () => async (dispatch) => {
  const response = await apiRequest('GET', '/api/auth/logout');
  localStorage.removeItem('token'); // Optionally clear the token
  dispatch({ type: LOGOUT });
};

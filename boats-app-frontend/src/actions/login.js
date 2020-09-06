import { RSAA } from 'redux-api-middleware';
// Create new boat actions
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginAction = (credentials) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_URL}/authenticate`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    types: [
      LOGIN,
      LOGIN_SUCCESS,
      LOGIN_FAILURE,
    ],
  },
});

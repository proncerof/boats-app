import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../utils/authentication-utils';

// Update boat actions
export const GET_ALL_BOATS = 'GET_ALL_BOATS';
export const GET_ALL_BOATS_SUCCESS = 'GET_ALL_BOATS_SUCCESS';
export const GET_ALL_BOATS_FAILURE = 'GET_ALL_BOATS_FAILURE';

export const getAllBoatsAction = (query) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_URL}/boats?page=${query.page - 1}&size=${query.size}&search=${query.search}`,
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    credentials: 'include',
    types: [
      GET_ALL_BOATS,
      GET_ALL_BOATS_SUCCESS,
      GET_ALL_BOATS_FAILURE,
    ],
  },
});

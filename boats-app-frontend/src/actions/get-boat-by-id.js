import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../utils/authentication-utils';

// Update boat actions
export const GET_BOAT_BY_ID = 'GET_BOAT_BY_ID';
export const GET_BOAT_BY_ID_SUCCESS = 'GET_BOAT_BY_ID_SUCCESS';
export const GET_BOAT_BY_ID_FAILURE = 'GET_BOAT_BY_ID_FAILURE';

export const getBoatByIdAction = (boatId) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_URL}/boats/${boatId}`,
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      GET_BOAT_BY_ID,
      GET_BOAT_BY_ID_SUCCESS,
      GET_BOAT_BY_ID_FAILURE,
    ],
  },
});

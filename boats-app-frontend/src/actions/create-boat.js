import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../utils/authentication-utils';
// Create new boat actions
export const CREATE_BOAT = 'CREATE_BOAT';
export const CREATE_BOAT_SUCCESS = 'CREATE_BOAT_SUCCESS';
export const CREATE_BOAT_FAILURE = 'CREATE_BOAT_FAILURE';

export const createBoatAction = (boat) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_URL}/boats`,
    method: 'POST',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(boat),
    types: [
      CREATE_BOAT,
      CREATE_BOAT_SUCCESS,
      CREATE_BOAT_FAILURE,
    ],
  },
});

import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../utils/authentication-utils';

export const UPDATE_BOAT = 'UPDATE_BOAT';
export const UPDATE_BOAT_SUCCESS = 'UPDATE_BOAT_SUCCESS';
export const UPDATE_BOAT_FAILURE = 'UPDATE_BOAT_FAILURE';

export const updateBoatAction = (boat) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_URL}/boats/${boat.id}`,
    method: 'PUT',
    body: JSON.stringify(boat),
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      UPDATE_BOAT,
      UPDATE_BOAT_SUCCESS,
      UPDATE_BOAT_FAILURE,
    ],
  },
});

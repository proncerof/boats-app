import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../utils/authentication-utils';

// Update boat actions
export const DELETE_BOAT = 'DELETE_BOAT';
export const DELETE_BOAT_SUCCESS = 'DELETE_BOAT_SUCCESS';
export const DELETE_BOAT_FAILURE = 'DELETE_BOAT_FAILURE';

export const deleteBoatAction = (id) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_URL}/boats/${id}`,
    method: 'DELETE',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      DELETE_BOAT,
      DELETE_BOAT_SUCCESS,
      DELETE_BOAT_FAILURE,
    ],
  },
});

import { GET_BOAT_BY_ID, GET_BOAT_BY_ID_FAILURE, GET_BOAT_BY_ID_SUCCESS } from '../actions/get-boat-by-id';

const INITIAL_STATE = {
  boat: {},
  error: null,
  loading: false,
};

function processGetBoatById(state) {
  return {
    ...state,
    loading: true,
    error: null,
  };
}

function processGetBoatByIdSuccess(state, boat) {
  return {
    ...state,
    boat,
    loading: false,
  };
}

function processGetBoatByIdFailure(state, error) {
  return {
    ...state,
    error,
    loading: false,
  };
}

export default (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case GET_BOAT_BY_ID:
      return processGetBoatById(state);
    case GET_BOAT_BY_ID_SUCCESS:
      return processGetBoatByIdSuccess(state, action.payload);
    case GET_BOAT_BY_ID_FAILURE:
      error = action.payload || { message: action.payload.message };
      return processGetBoatByIdFailure(state, error);

    default:
      return state;
  }
};

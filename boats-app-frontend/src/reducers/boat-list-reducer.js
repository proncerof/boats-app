import { GET_ALL_BOATS_SUCCESS, GET_ALL_BOATS_FAILURE, GET_ALL_BOATS } from '../actions/get-all-boats';
import { SET_GET_ALL_BOATS_QUERY } from '../actions/set-get-all-boats-query';

const INITIAL_STATE = {
  boats: [],
  totalPages: 0,
  query: {
    page: 1,
    size: 5,
    search: '',
  },
  error: null,
  loading: false,
};

function processGetAllBoats(state) {
  return {
    ...state,
    loading: true,
    error: null,
  };
}

function processGetAllBoatsSuccess(state, response) {
  return {
    ...state,
    boats: response.content,
    totalPages: response.totalPages,
    loading: false,
  };
}

function processGetAllBoatsFailure(state, error) {
  return {
    ...state,
    error,
    loading: false,
  };
}

function processSetGetAllBoatsQuery(state, query) {
  return {
    ...state,
    query: {
      ...state.query,
      ...query,
    },
  };
}

export default (state = INITIAL_STATE, action) => {
  let error;
  switch (action.type) {
    case GET_ALL_BOATS:
      return processGetAllBoats(state);
    case GET_ALL_BOATS_SUCCESS:
      return processGetAllBoatsSuccess(state, action.payload);
    case GET_ALL_BOATS_FAILURE:
      error = action.payload || { message: action.payload.message };
      return processGetAllBoatsFailure(state, error);

    case SET_GET_ALL_BOATS_QUERY:
      return processSetGetAllBoatsQuery(state, action.payload);

    default:
      return state;
  }
};

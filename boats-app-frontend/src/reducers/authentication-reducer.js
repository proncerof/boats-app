import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login';
import { isAuthenticated } from '../utils/authentication-utils';
import { LOGOUT } from '../actions/logout';

const initialState = {
  isAuthenticated: isAuthenticated(),
  loginInProgress: false,
  error: null,
};

const checkUnauthorizedAction = (action) => {
  if (
    typeof action.payload === 'object'
    && action.payload.toString().includes('401 - Unauthorized')
  ) {
    sessionStorage.removeItem('accessToken');
  }
};

function processLogin(state) {
  return { ...state, loginInProgress: true };
}

function processLoginSuccess(state, token) {
  sessionStorage.setItem('accessToken', token);
  return {
    ...state,
    isAuthenticated: isAuthenticated(),
    error: null,
  };
}

function processLoginFailure(state, error) {
  sessionStorage.removeItem('accessToken');
  return {
    ...state,
    isAuthenticated: false,
    error,
  };
}

function processLogout(state) {
  sessionStorage.removeItem('accessToken');
  return {
    ...state,
    isAuthenticated: false,
  };
}

export default (state = initialState, action) => {
  let error;
  checkUnauthorizedAction(action);
  switch (action.type) {
    case LOGIN:
      return processLogin;

    case LOGIN_SUCCESS:
      return processLoginSuccess(state, action.payload.token);

    case LOGIN_FAILURE:
      error = action.payload.response || { message: action.payload.message };
      return processLoginFailure(state, error);

    case LOGOUT:
      return processLogout(state);

    default:
      return state;
  }
};

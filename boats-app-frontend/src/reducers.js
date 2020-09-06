import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import boatList from './reducers/boat-list-reducer';
import selectedBoat from './reducers/selected-boat';
import authenticationReducer from './reducers/authentication-reducer';

const createRootReducer = (history) => combineReducers({
  boatList,
  selectedBoat,
  authenticationReducer,
  router: connectRouter(history),
});

export default createRootReducer;

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export default function configureStore(history) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    createRootReducer(history),
    composeEnhancers(
      applyMiddleware(thunkMiddleware, apiMiddleware, routerMiddleware(history)),
    ),
  );
}

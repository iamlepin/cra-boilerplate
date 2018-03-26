import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/rootReducer';
import initialState from '../reducers/initialState';

export const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer,
  }),
  { initialState },
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { usersReducer } from './users/reducers';

const RootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
});

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;

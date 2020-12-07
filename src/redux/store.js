import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { usersReducer } from './users/reducers';
import { userReducer } from './user/reducers';
import { postsReducer } from './posts/reducers';
import { postReducer } from './post/reducers';

const RootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
  posts: postsReducer,
  post: postReducer,
});

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;

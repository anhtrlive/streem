import { FETCH_POSTS } from './actions';

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
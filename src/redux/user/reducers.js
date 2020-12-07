import { FETCH_USER_BY_ID, POST_USER } from './actions';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_BY_ID:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

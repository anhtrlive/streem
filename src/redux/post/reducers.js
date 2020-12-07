import { FETCH_POST } from './actions';

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

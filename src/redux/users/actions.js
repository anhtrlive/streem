import mockapi from '../../apis/mockapi';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => async (dispatch) => {
  const response = await mockapi.get(`/users`);

  return dispatch({
    type: FETCH_USERS,
    payload: response.data,
  });
};

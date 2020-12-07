import mockapi from '../../apis/mockapi';

export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = (pageNumber = 1) => async (dispatch) => {
  const response = await mockapi.get(`/users?page=${pageNumber}&limit=10`);

  return dispatch({
    type: FETCH_USERS,
    payload: response.data,
  });
};

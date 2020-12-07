import mockapi from '../../apis/mockapi';

export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID';
export const UPDATE_USER_BY_ID = 'FETCH_USER_BY_ID';
export const DELETE_USER_BY_ID = 'FETCH_USER_BY_ID';

export const fetchUserById = (id) => async (dispatch) => {
  const response = await mockapi.get(`/users/${id}`);

  return dispatch({
    type: FETCH_USER_BY_ID,
    payload: response.data,
  });
};

export const updateUserById = (user) => async (dispatch) => {
  const response = await mockapi.put(`/users/${id}`, user);

  return dispatch({
    type: UPDATE_USER_BY_ID,
  });
};

export const deleteUserById = (id) => async (dispatch) => {
  const response = await mockapi.delete(`/users/${id}`);

  return dispatch({
    type: DELETE_USER_BY_ID,
  });
};

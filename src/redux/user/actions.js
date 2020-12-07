import mockapi from '../../apis/mockapi';

export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID';
export const POST_USER = 'POST_USER';
export const UPDATE_USER_BY_ID = 'FETCH_USER_BY_ID';
export const DELETE_USER_BY_ID = 'FETCH_USER_BY_ID';

export const fetchUserById = (userId) => async (dispatch) => {
  const response = await mockapi.get(`/users/${userId}`);

  return dispatch({
    type: FETCH_USER_BY_ID,
    payload: response.data,
  });
};

export const posetUser = (userInfo) => async (dispatch) => {
  const response = await mockapi.post(`/users`, userInfo);

  return dispatch({
    type: POST_USER,
  });
};

export const updateUserById = (userInfo, userId) => async (dispatch) => {
  const response = await mockapi.put(`/users/${userId}`, userInfo);

  return dispatch({
    type: UPDATE_USER_BY_ID,
  });
};

export const deleteUserById = (userId) => async (dispatch) => {
  const response = await mockapi.delete(`/users/${userId}`);

  return dispatch({
    type: DELETE_USER_BY_ID,
  });
};

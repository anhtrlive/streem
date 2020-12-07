import mockapi from '../../apis/mockapi';

export const FETCH_POSTS = 'FETCH_USER_BY_ID';
export const UPDATE_POST = 'FETCH_USER_BY_ID';
export const DELETE_POST = 'FETCH_USER_BY_ID';

export const fetchPosts = (id) => async (dispatch) => {
  const response = await mockapi.get(`/users/${id}/posts`);

  return dispatch({
    type: FETCH_POSTS,
    payload: response.data,
  });
};

export const updatePost = (postInfo, userId, postId) => async (dispatch) => {
  const response = await mockapi.put(
    `/users/${userId}/posts/${postId}`,
    postInfo
  );

  return dispatch({
    type: UPDATE_POST,
  });
};

export const deleteUserById = (userId, postId) => async (dispatch) => {
  const response = await mockapi.delete(`/users/${userId}/posts/${postId}`);

  return dispatch({
    type: DELETE_POST,
  });
};

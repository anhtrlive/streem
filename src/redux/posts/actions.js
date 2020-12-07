import mockapi from '../../apis/mockapi';

export const FETCH_POSTS = 'FETCH_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const fetchPosts = (userId) => async (dispatch) => {
  const response = await mockapi.get(`/users/${userId}/posts`);

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

export const deletePostById = (userId, postId) => async (dispatch) => {
  const response = await mockapi.delete(`/users/${userId}/posts/${postId}`);

  return dispatch({
    type: DELETE_POST,
  });
};

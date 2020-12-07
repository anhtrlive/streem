import mockapi from '../../apis/mockapi';

export const FETCH_POST = 'FETCH_POST';

export const fetchOnePost = (userId, postId) => async (dispatch) => {
  const response = await mockapi.get(`/users/${userId}/posts/${postId}`);

  return dispatch({
    type: FETCH_POST,
    payload: response.data,
  });
};

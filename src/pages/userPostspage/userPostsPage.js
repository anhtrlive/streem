import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';

import UserCard from '../../components/userCard/userCard';
import UserPosts from '../../components/userPosts/userPosts';
import { fetchPosts } from '../../redux/posts/actions';
import { fetchUserById } from '../../redux/user/actions';

export default function UserPostsPage() {
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  const { userId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserById(userId));
    dispatch(fetchPosts(userId));
  }, []);
  return (
    <Grid padded>
      <Grid.Row>
        <UserCard user={user} />
      </Grid.Row>
      <Grid.Row>
        <UserPosts posts={posts} />
      </Grid.Row>
    </Grid>
  );
}

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Item, Button, Container } from 'semantic-ui-react';

import { fetchOnePost } from '../../redux/post/actions';
import { deletePostById } from '../../redux/posts/actions';
import { formatDate } from '../../utils/utils';

export default function UserPost() {
  const { userId, postId } = useParams();
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnePost(userId, postId));
  }, []);

  const deletePostHandler = () => {
    dispatch(deletePostById(userId, userId));
  };

  return (
    <Container style={{ margin: 60 }}>
      <Item key={post.id}>
        <Item.Image size="small" src={post.image} />
        <Item.Content>
          <Item.Meta>
            <strong>create</strong>
            <span className="date">{formatDate(post.createdAt)}</span>
          </Item.Meta>
          <Item.Meta>
            <strong>last edit</strong>
            <span className="date">{formatDate(post.editedAt)}</span>
          </Item.Meta>
          <Item.Description>{post.content}</Item.Description>
          <Item.Extra>
            <Button primary>Update</Button>
            <Button onClick={deletePostHandler}>Delete</Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Container>
  );
}

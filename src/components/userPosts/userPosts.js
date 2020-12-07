import { Link } from 'react-router-dom';
import { Item, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePostById } from '../../redux/posts/actions';
import { formatDate } from '../../utils/utils';

export default function UserPosts({ posts }) {
  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch(deletePostById(userId, userId));
  };

  const userId = useSelector((state) => state.user.id);
  return (
    <Item.Group>
      {posts &&
        posts.map((post) => {
          return (
            <Item key={post.id}>
              <Item.Image
                size="small"
                src={post.image}
                as={Link}
                to={`/${userId}/${post.id}`}
              />
              <Item.Content>
                <Link to={`/${userId}/${post.id}`}>
                  <Item.Meta>
                    <strong>create</strong>
                    <span className="date">{formatDate(post.createdAt)}</span>
                  </Item.Meta>
                  <Item.Meta>
                    <strong>last edit</strong>
                    <span className="date">{formatDate(post.editedAt)}</span>
                  </Item.Meta>
                  <Item.Description>{post.content}</Item.Description>
                </Link>
                <Item.Extra>
                  <Button primary>Update</Button>
                  <Button onClick={deletePostHandler}>Delete</Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
    </Item.Group>
  );
}

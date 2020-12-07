import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Item, Button } from 'semantic-ui-react';
import { formatDate } from '../../utils/utils';

export default function UserPosts({ posts }) {
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
                  <Button>Delete</Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
    </Item.Group>
  );
}

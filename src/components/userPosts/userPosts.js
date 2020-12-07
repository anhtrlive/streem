import { Item, Button } from 'semantic-ui-react';
import { formatDate } from '../../utils/utils';

export default function UserPosts({ posts }) {
  return (
    <Item.Group>
      {posts &&
        posts.map((post) => {
          return (
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
                  <Button>Delete</Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
    </Item.Group>
  );
}

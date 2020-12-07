import { Item, Button } from 'semantic-ui-react';

export default function UserPosts({ posts }) {
  const toLocalStr = (date) => {
    const d = new Date(date);
    return d.toLocaleString();
  };
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
                  <span className="date">{toLocalStr(post.createdAt)}</span>
                </Item.Meta>
                <Item.Meta>
                  <strong>last edit</strong>
                  <span className="date">{toLocalStr(post.editedAt)}</span>
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

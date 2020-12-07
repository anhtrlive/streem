import { Link } from 'react-router-dom';
import { Image, Card, Button } from 'semantic-ui-react';
import { formatDate } from '../../utils/utils';

export default function UserCard({ user }) {
  return (
    <Card>
      <Image
        src={user.avatar}
        wrapped
        ui={false}
        as={Link}
        to={`/${user.id}`}
      />
      <Card.Content as={Link} to={`/${user.id}`}>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <span className="date">{formatDate(user.createdAt)}</span>
        </Card.Meta>
        <Card.Description textAlign={'left'}>
          <strong>phone: </strong>
          {user.phone}
        </Card.Description>
        <Card.Description textAlign={'left'}>
          <strong>city: </strong>
          {user.city}
        </Card.Description>
        <Card.Description textAlign={'left'}>
          <strong>role: </strong>
          {user.role}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button primary>Update</Button>
        <Button>Delete</Button>
      </Card.Content>
    </Card>
  );
}

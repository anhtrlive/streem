import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/users/actions';
import { Grid } from 'semantic-ui-react';

import UserCard from '../../components/userCard/userCard';

export default function Homepage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Grid doubling padded columns={3}>
      {users &&
        users.map((user) => {
          return (
            <Grid.Column key={user.id}>
              <UserCard user={user} />
            </Grid.Column>
          );
        })}
    </Grid>
  );
}

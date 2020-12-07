import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';

import { fetchUserById, updateUserById } from '../../redux/user/actions';

export default function UpdateUserPage() {
  const user = useSelector((state) => state.user);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState(``);
  const [avatar, setAvatar] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [role, setRole] = useState('');

  const changleValueHadnler = (evt, setValue) => {
    setValue(evt.target.value);
  };

  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, []);

  useEffect(() => {
    setName(user.name);
    setAvatar(user.avatar);
    setPhone(user.phone);
    setCity(user.city);
    setRole(user.role);
  }, [user]);

  const onSubmitHadnler = (evt) => {
    evt.preventDefault();
    dispatch(
      updateUserById(
        {
          name: name,
          avatar: avatar,
          phone: phone,
          city: city,
          role: role,
        },
        user.id
      )
    );
    history.push(`/`);
  };
  return (
    <Form onSubmit={onSubmitHadnler}>
      <Form.Group>
        <Form.Input
          label="Name"
          placeholder={name}
          value={name || ''}
          width={4}
          onChange={(evt) => {
            changleValueHadnler(evt, setName);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          label="Avatar url"
          placeholder={avatar}
          value={avatar || ''}
          width={4}
          onChange={(evt) => {
            changleValueHadnler(evt, setAvatar);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          label="Phone"
          placeholder={phone}
          value={phone || ''}
          width={4}
          onChange={(evt) => {
            changleValueHadnler(evt, setPhone);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          label="City"
          placeholder={city}
          value={city || ''}
          width={4}
          onChange={(evt) => {
            changleValueHadnler(evt, setCity);
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          label="Role"
          placeholder={role}
          value={role || ''}
          width={4}
          onChange={(evt) => {
            changleValueHadnler(evt, setRole);
          }}
        />
      </Form.Group>
      <Button primary>Update</Button>
    </Form>
  );
}

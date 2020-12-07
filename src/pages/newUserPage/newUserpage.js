import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Button, Container } from 'semantic-ui-react';
import { posetUser } from '../../redux/user/actions';

export default function NewUser() {
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

  const onSubmitHadnler = (evt) => {
    evt.preventDefault();
    dispatch(
      posetUser({
        createAt: new Date().toISOString(),
        name: name,
        avatar: avatar,
        phone: phone,
        city: city,
        role: role,
      })
    );
    history.push(`/`);
  };
  return (
    <Container style={{ margin: 60 }}>
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
    </Container>
  );
}

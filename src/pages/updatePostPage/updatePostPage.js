import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Button, Container } from 'semantic-ui-react';
import { fetchOnePost } from '../../redux/post/actions';

import { updatePost } from '../../redux/posts/actions';

export default function UpdatePostPage() {
  const post = useSelector((state) => state.post);
  const { userId, postId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const changleValueHadnler = (evt, setValue) => {
    setValue(evt.target.value);
  };

  useEffect(() => {
    dispatch(fetchOnePost(userId, postId));
  }, []);

  useEffect(() => {
    setImage(post.image);
    setContent(post.content);
  }, [post]);

  const onSubmitHadnler = (evt) => {
    evt.preventDefault();
    dispatch(
      updatePost(
        {
          editedAt: new Date().toISOString(),
          image: image,
          content: content,
        },
        userId,
        postId
      )
    );
    history.push(`/${userId}`);
  };
  return (
    <Container style={{ margin: 60 }}>
      <Form onSubmit={onSubmitHadnler}>
        <Form.Group>
          <Form.Input
            label="Image"
            placeholder={image}
            value={image || ''}
            width={4}
            onChange={(evt) => {
              changleValueHadnler(evt, setImage);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Content"
            placeholder={content}
            value={content || ''}
            width={4}
            onChange={(evt) => {
              changleValueHadnler(evt, setContent);
            }}
          />
        </Form.Group>
        <Button primary>Update</Button>
      </Form>
    </Container>
  );
}

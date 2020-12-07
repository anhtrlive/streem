import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Homepage from '../pages/homepage/homepage';
import UserPostsPage from '../pages/userPostspage/userPostsPage';

export default function App() {
  return (
    <Container style={{ margin: 20 }}>
      <Switch>
        <Route exact path="/search"></Route>
        <Route path="/:userId">
          <UserPostsPage />
        </Route>
        <Route path="/users/:userId/posts/:postId"></Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Container>
  );
}

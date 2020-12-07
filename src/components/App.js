import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Homepage from '../pages/homepage/homepage';
import UserPost from '../pages/postpage/postpage';
import UserPostsPage from '../pages/userPostspage/userPostsPage';

export default function App() {
  return (
    <Container style={{ margin: 20 }}>
      <Switch>
        <Route exact path="/search"></Route>
        <Route exact path="/:userId">
          <UserPostsPage />
        </Route>
        <Route exact path="/:userId/:postId">
          <UserPost />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Container>
  );
}

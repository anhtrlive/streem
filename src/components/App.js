import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Homepage from '../pages/homepage/homepage';
import UserPost from '../pages/postpage/postPage';
import UpdateUserPage from '../pages/updatUserPage/updateUserPage';
import UserPostsPage from '../pages/userPostspage/userPostsPage';
import Header from './header/header';

export default function App() {
  return (
    <Container style={{ margin: 20 }}>
      <Header />
      <Switch>
        <Route exact path="/search"></Route>
        <Route exact path="/:userId">
          <UserPostsPage />
        </Route>
        <Route exact path="/:userId/:postId">
          <UserPost />
        </Route>
        <Route exact path="/update/user/:userId">
          <UpdateUserPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Container>
  );
}

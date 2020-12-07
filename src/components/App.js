import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Homepage from '../pages/homepage/homepage';
import NewUser from '../pages/newUserPage/newUserpage';
import UserPost from '../pages/postpage/postPage';
import UpdatePostPage from '../pages/updatePostPage/updatePostPage';
import UpdateUserPage from '../pages/updatUserPage/updateUserPage';
import UserPostsPage from '../pages/userPostspage/userPostsPage';
import Header from './header/header';

export default function App() {
  return (
    <Container style={{ margin: 20 }}>
      <Header />
      <Switch>
        <Route exact path="/search"></Route>
        <Route exact path="/new-user">
          <NewUser />
        </Route>
        <Route exact path="/:userId">
          <UserPostsPage />
        </Route>
        <Route exact path="/:userId/posts/:postId">
          <UserPost />
        </Route>
        <Route exact path="/:userId/update-post/:postId">
          <UpdatePostPage />
        </Route>
        <Route exact path="/:userId/update-user">
          <UpdateUserPage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Container>
  );
}

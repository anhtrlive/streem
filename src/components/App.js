import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Homepage from '../pages/homepage/homepage';

export default function App() {
  return (
    <Container style={{ margin: 20 }}>
      <Switch>
        <Route exact path="/search"></Route>
        <Route path="/:userId"></Route>
        <Route path="/users/:userId/posts/:postId"></Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Container>
  );
}

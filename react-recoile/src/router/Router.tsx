import { Route, Switch } from 'react-router-dom';
import Login from '../components/pages/Login';

function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
}
export default Router;

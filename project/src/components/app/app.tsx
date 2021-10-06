import MainScreen from '../main-screen/main-screen';

import { placeCards } from '../../types/PlaceCards';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page404 from '../page-404/page-404';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../../hocs/private-route';

const isAuthorized = false;

function App({ places }: { places: placeCards }): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainScreen places={places} />
        </Route>
        <Route path='/login' exact>
          <LoginScreen />
        </Route>
        <PrivateRoute
          path='/favorites'
          render={() => <FavoritesScreen />}
          exact
          isAuthorized={isAuthorized}
        />
        <Route path='/offer/:id' exact>
          <PropertyScreen />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

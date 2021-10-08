import MainScreen from '../main-screen/main-screen';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page404 from '../page-404/page-404';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import PrivateRoute from '../../hocs/private-route';
import { FavoritePlacesData, PlaceCardData } from '../../types/place-cards';
import { ImageData } from '../../types/image-data';

type AppProps = {
  mainPlaces: PlaceCardData[];
  nearPlaces: PlaceCardData[];
  favoritePlaces: FavoritePlacesData[];
  galleryImages: ImageData[];
};

const isAuthorized = true;

function App(props: AppProps): JSX.Element {
  const { mainPlaces, nearPlaces, favoritePlaces, galleryImages } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainScreen mainPlaces={mainPlaces} />
        </Route>
        <Route path='/login' exact>
          <LoginScreen />
        </Route>
        <PrivateRoute
          path='/favorites'
          render={() => <FavoritesScreen favoritePlaces={favoritePlaces} />}
          exact
          isAuthorized={isAuthorized}
        />
        <Route path='/offer/:id' exact>
          <PropertyScreen
            isAuthorized={isAuthorized}
            nearPlaces={nearPlaces}
            galleryImages={galleryImages}
          />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

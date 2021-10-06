import MainScreen from '../main-screen/main-screen';

import { placeCards } from '../../types/PlaceCards';

function App({places} : {places: placeCards}): JSX.Element {
  return <MainScreen places={places} />;
}

export default App;

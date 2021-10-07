import MainScreen from '../main-screen/main-screen';

import { placeCards } from '../../types/place-cards';

type AppProps = {
  places: placeCards;
};

function App(props: AppProps): JSX.Element {
  return <MainScreen places={props.places} />;
}

export default App;

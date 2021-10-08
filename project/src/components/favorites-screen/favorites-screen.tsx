/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import { FavoritePlacesData } from '../../types/place-cards';

type FavoritesScreenProps = {
  favoritePlaces: FavoritePlacesData[];
};

function FavoritesScreen(props: FavoritesScreenProps): JSX.Element {
  const { favoritePlaces } = props;
  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <FavoritesList favorites={favoritePlaces} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;

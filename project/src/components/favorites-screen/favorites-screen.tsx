/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';

function FavoritesScreen(): JSX.Element {
  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <FavoritesList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
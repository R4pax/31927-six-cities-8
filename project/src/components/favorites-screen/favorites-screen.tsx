/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */

import FavoritesList from '../favorites-list/favorites-list';
import Footer from '../footer/footer';
import Header from '../header/header';
import { placeCards } from '../../types/place-cards';

const favoritePlaces: placeCards = [
  {
    id: 4,
    isPremium: true,
    isFavorite: true,
    imgSrc: 'img/apartment-03.jpg',
    imgAlt: 'Place image',
    priceValue: 180,
    ratingPercents: 100,
    placeName: 'Nice, cozy, warm big bed apartment',
    placeType: 'Apartment',
  },
  {
    id: 5,
    isFavorite: true,
    imgSrc: 'img/room.jpg',
    imgAlt: 'Place image',
    priceValue: 80,
    ratingPercents: 80,
    placeName: 'Wood and stone place',
    placeType: 'Private room',
  },
  {
    id: 6,
    isFavorite: true,
    imgSrc: 'img/apartment-small-04.jpg',
    imgAlt: 'Place image',
    priceValue: 180,
    ratingPercents: 100,
    placeName: 'White castle',
    placeType: 'Apartment',
  },
];

function FavoritesScreen(): JSX.Element {
  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <FavoritesList places={favoritePlaces} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;

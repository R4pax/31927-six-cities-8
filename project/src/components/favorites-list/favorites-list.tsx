/* eslint-disable jsx-a11y/anchor-is-valid */

import { placeCards } from '../../types/PlaceCards';
import PlaceCard from '../place-card/place-card';

/* eslint-disable jsx-a11y/img-redundant-alt */
function FavoritesList():JSX.Element {
  const places: placeCards = [
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

  return (
    <ul className='favorites__list'>
      <li className='favorites__locations-items'>
        <div className='favorites__locations locations locations--current'>
          <div className='locations__item'>
            <a className='locations__item-link' href='#'>
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className='favorites__places'>
          <PlaceCard type='favorites' place={places[0]} />
          <PlaceCard type='favorites' place={places[1]} />
        </div>
      </li>

      <li className='favorites__locations-items'>
        <div className='favorites__locations locations locations--current'>
          <div className='locations__item'>
            <a className='locations__item-link' href='#'>
              <span>Cologne</span>
            </a>
          </div>
        </div>
        <div className='favorites__places'>
          <PlaceCard type='favorites' place={places[2]} />
        </div>
      </li>
    </ul>
  );
}

export default FavoritesList;

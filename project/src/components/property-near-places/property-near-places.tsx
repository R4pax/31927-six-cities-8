/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { placeCard, placeCards } from '../../types/PlaceCards';
import PlaceCard from '../place-card/place-card';
function PropertyNearPlaces(): JSX.Element {
  const places: placeCards = [
    {
      id: 2,
      imgSrc: 'img/room.jpg',
      imgAlt: 'Place image',
      priceValue: 80,
      ratingPercents: 80,
      placeName: 'Wood and stone place',
      placeType: 'Private room',
    },
    {
      id: 3,
      imgSrc: 'img/apartment-02.jpg',
      imgAlt: 'Place image',
      priceValue: 132,
      ratingPercents: 80,
      placeName: 'Canal View Prinsengracht',
      placeType: 'Apartment',
    },
    {
      id: 4,
      isPremium: true,
      imgSrc: 'img/apartment-03.jpg',
      imgAlt: 'Place image',
      priceValue: 180,
      ratingPercents: 100,
      placeName: 'Nice, cozy, warm big bed apartment',
      placeType: 'Apartment',
    },
  ];

  return (
    <div className='container'>
      <section className='near-places places'>
        <h2 className='near-places__title'>
          Other places in the neighbourhood
        </h2>
        <div className='near-places__list places__list'>
          {places.map((place:placeCard) => <PlaceCard key={place.id} type='near-places' place={place} />)}
        </div>
      </section>
    </div>
  );
}
export default PropertyNearPlaces;

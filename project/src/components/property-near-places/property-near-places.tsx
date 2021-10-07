/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { PlaceCard, PlaceCards } from '../../types/place-cards';
import PlaceCard from '../place-card/place-card';

type PropertyNearPlacesProps = {
  places: PlaceCards;
};

function PropertyNearPlaces(props: PropertyNearPlacesProps): JSX.Element {
  const { places } = props;
  return (
    <div className='container'>
      <section className='near-places places'>
        <h2 className='near-places__title'>
          Other places in the neighbourhood
        </h2>
        <div className='near-places__list places__list'>
          {places.map((place: PlaceCard) => (
            <PlaceCard key={place.id} type='near-places' place={place} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default PropertyNearPlaces;

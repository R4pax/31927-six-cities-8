/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { PlaceCardData } from '../../types/place-cards';
import PlaceCards from '../place-cards/place-cards';

type PropertyNearPlacesProps = {
  places: PlaceCardData[];
};

function PropertyNearPlaces(props: PropertyNearPlacesProps): JSX.Element {
  const { places } = props;
  return (
    <div className='container'>
      <section className='near-places places'>
        <h2 className='near-places__title'>
          Other places in the neighbourhood
        </h2>
        <PlaceCards places={places} type='near' />
      </section>
    </div>
  );
}
export default PropertyNearPlaces;

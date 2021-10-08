import { PlaceCardData } from '../../types/place-cards';
import PlaceCard from '../place-card/place-card';

type PlaceCardsProps = {
  type: string;
  places: PlaceCardData[];
};

function PlaceCards(props: PlaceCardsProps): JSX.Element {
  const { places, type } = props;
  const containerClass: string =
    {
      main: 'cities__places-list places__list tabs__content',
      near: 'near-places__list places__list',
      fav: 'favorites__places',
    }[type] || '';

  return (
    <div className={containerClass}>
      {places.map((place: PlaceCardData) => (
        <PlaceCard key={place.id} type='cities' place={place} />
      ))}
    </div>
  );
}

export default PlaceCards;

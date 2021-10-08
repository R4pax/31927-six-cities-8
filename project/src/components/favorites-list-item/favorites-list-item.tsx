import { PlaceCardData } from '../../types/place-cards';
import PlaceCards from '../place-cards/place-cards';

type FavoritesListItemProps = {
  town: string;
  places: PlaceCardData[];
}

function FavoritesListItem(props:FavoritesListItemProps):JSX.Element {
  const { town, places } = props;
  return (
    <li className='favorites__locations-items'>
      <div className='favorites__locations locations locations--current'>
        <div className='locations__item'>
          <a className='locations__item-link' href='#'>
            <span>{town}</span>
          </a>
        </div>
      </div>
      <PlaceCards places={ places.slice(0,2) } type='fav' />
    </li>
  );
}

export default FavoritesListItem;

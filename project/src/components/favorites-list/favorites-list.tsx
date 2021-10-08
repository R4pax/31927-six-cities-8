/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { FavoritePlacesData } from '../../types/place-cards';
import FavoritesListItem from '../favorites-list-item/favorites-list-item';

type FavoritesProps = {
  favorites: FavoritePlacesData[];
};

function FavoritesList(props: FavoritesProps): JSX.Element {
  const { favorites } = props;
  return (
    <ul className='favorites__list'>
      {favorites.map((elem) => (
        <FavoritesListItem
          key={elem.id}
          town={elem.town}
          places={elem.places}
        />
      ))}
    </ul>
  );
}

export default FavoritesList;

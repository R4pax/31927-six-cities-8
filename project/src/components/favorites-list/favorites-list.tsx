/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { placeCards } from '../../types/place-cards';
import PlaceCard from '../place-card/place-card';

type FavoritesProps = {
  places :placeCards
}

function FavoritesList({places} : FavoritesProps):JSX.Element {
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

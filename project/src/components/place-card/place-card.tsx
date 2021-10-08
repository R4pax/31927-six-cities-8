/* eslint-disable jsx-a11y/anchor-is-valid */

import { PlaceCardData } from '../../types/place-cards';

type PlaceCardProps = {
  type: string;
  place: PlaceCardData;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { type, place } = props;
  return (
    <article className={`${type}__place-card place-card`}>
      {place.isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}
      <div className={`${type}__image-wrapper place-card__image-wrapper`}>
        <a href='#'>
          <img
            className='place-card__image'
            src={place.imgSrc}
            width={type === 'favorites' ? '150' : '260'}
            height={type === 'favorites' ? '110' : '200'}
            alt={place.imgAlt}
          />
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{place.priceValue}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              place.isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type='button'
          >
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>
              {`${place.isFavorite ? 'In' : 'To'} bookmarks`}
            </span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${place.ratingPercents}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>{place.placeName}</a>
        </h2>
        <p className='place-card__type'>{place.placeType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

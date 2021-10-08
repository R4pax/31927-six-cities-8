import { FavoritePlacesData } from '../types/place-cards';

export const FAVORITE_PLACES: FavoritePlacesData[] = [
  {
    id: 1,
    town: 'Amsterdam',
    places: [
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
    ],
  },
  {
    id: 2,
    town: 'Cologne',
    places: [
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
    ],
  },

];

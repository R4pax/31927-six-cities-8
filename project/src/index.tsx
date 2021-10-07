import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { ImagesData } from './types/image-data';
import { PlaceCards } from './types/place-cards';

const MAIN_PLACES: PlaceCards = [
  {
    id: 1,
    isPremium: true,
    isFavorite: true,
    imgSrc: 'img/apartment-01.jpg',
    imgAlt: 'Place image',
    priceValue: 120,
    ratingPercents: 80,
    placeName: 'Beautiful &amp; luxurious apartment at great location',
    placeType: 'Apartment',
  },
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
];

const GALLERY_IMAGES: ImagesData = [
  {
    id: 1,
    imgSrc: 'img/room.jpg',
    imgAlt: 'Photo studio',
  },
  {
    id: 2,
    imgSrc: 'img/apartment-01.jpg',
    imgAlt: 'Photo studio',
  },
  {
    id: 3,
    imgSrc: 'img/apartment-02.jpg',
    imgAlt: 'Photo studio',
  },
  {
    id: 4,
    imgSrc: 'img/apartment-03.jpg',
    imgAlt: 'Photo studio',
  },
  {
    id: 5,
    imgSrc: 'img/studio-01.jpg',
    imgAlt: 'Photo studio',
  },
  {
    id: 6,
    imgSrc: 'img/apartment-01.jpg',
    imgAlt: 'Photo studio',
  },
];

const NEAR_PLACES: PlaceCards = [
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

const FAVORITE_PLACES: PlaceCards = [
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

ReactDOM.render(
  <React.StrictMode>
    <App
      mainPlaces={MAIN_PLACES}
      nearPlaces={NEAR_PLACES}
      galleryImages={GALLERY_IMAGES}
      favoritePlaces={FAVORITE_PLACES}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

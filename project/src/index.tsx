import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { placeCards } from './types/place-cards';

const places: placeCards = [
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

ReactDOM.render(
  <React.StrictMode>
    <App places={places} />
  </React.StrictMode>,
  document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { FAVORITE_PLACES } from './mocks/favorites';
import { GALLERY_IMAGES } from './mocks/gallery';
import { MAIN_PLACES, NEAR_PLACES } from './mocks/places';

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

import Header from '../header/header';
import PropertyDescription from '../property-description/property-description';
import PropertyGallery from '../property-gallery/property-gallery';
import PropertyReviews from '../property-reviews/property-reviews';
import PropertyNearPlaces from '../property-near-places/property-near-places';
import PropertyMap from '../property-map/property-map';
import { imagesData } from '../../types/image-data';
import { placeCards } from '../../types/place-cards';

const galleryImages: imagesData = [
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

const nearPlaces: placeCards = [
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

function PropertyScreen(): JSX.Element {
  const isAuthorized = true;
  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          <PropertyGallery images={galleryImages} />
          <PropertyDescription />
          {isAuthorized && <PropertyReviews />}
          <PropertyMap />
        </section>
        <PropertyNearPlaces places={nearPlaces}/>
      </main>
    </div>
  );
}

export default PropertyScreen;

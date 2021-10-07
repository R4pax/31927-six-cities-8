import Header from '../header/header';
import PropertyDescription from '../property-description/property-description';
import PropertyGallery from '../property-gallery/property-gallery';
import PropertyReviews from '../property-reviews/property-reviews';
import PropertyNearPlaces from '../property-near-places/property-near-places';
import PropertyMap from '../property-map/property-map';
import { imagesData } from '../../types/image-data';
import { placeCards } from '../../types/place-cards';

type PropertyScreenProps = {
  isAuthorized: boolean;
  nearPlaces: placeCards;
  galleryImages: imagesData;
};

function PropertyScreen(props: PropertyScreenProps): JSX.Element {
  const { isAuthorized, nearPlaces, galleryImages } = props;
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
        <PropertyNearPlaces places={nearPlaces} />
      </main>
    </div>
  );
}

export default PropertyScreen;

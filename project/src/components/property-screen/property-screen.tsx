import Header from '../header/header';
import PropertyDescription from '../property-description/property-description';
import PropertyGallery from '../property-gallery/property-gallery';
import PropertyReviews from '../property-reviews/property-reviews';
import PropertyNearPlaces from '../property-near-places/property-near-places';
import PropertyMap from '../property-map/property-map';

function PropertyScreen(): JSX.Element {
  const isAuthorized = true;

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <section className='property'>
          <PropertyGallery />
          <PropertyDescription />
          {isAuthorized && <PropertyReviews />}
          <PropertyMap />
        </section>
        <PropertyNearPlaces />
      </main>
    </div>
  );
}

export default PropertyScreen;

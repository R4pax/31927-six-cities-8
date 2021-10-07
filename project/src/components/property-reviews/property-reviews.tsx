import PropertyReviewsForm from '../property-reviews-form/property-reviews-form';
import PropertyReviewsList from '../property-reviews-list/property-reviews-list';

function PropertyReviews(): JSX.Element {
  return (
    <section className='property__reviews reviews'>
      <h2 className='reviews__title'>
        Reviews &middot; <span className='reviews__amount'>1</span>
      </h2>
      <PropertyReviewsList />
      <PropertyReviewsForm />
    </section>
  );
}

export default PropertyReviews;

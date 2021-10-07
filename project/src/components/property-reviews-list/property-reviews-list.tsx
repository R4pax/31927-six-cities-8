import PropertyReview from '../property-review/property-review';

function PropertyReviewsList(): JSX.Element {
  return (
    <ul className='reviews__list'>
      <PropertyReview />
    </ul>
  );
}

export default PropertyReviewsList;

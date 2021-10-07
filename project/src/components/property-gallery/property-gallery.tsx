/* eslint-disable jsx-a11y/img-redundant-alt */

import { imagesData } from '../../types/image-data';

type PropertyGalleryProps = {
  images: imagesData;
};

function PropertyGallery(props: PropertyGalleryProps): JSX.Element {
  const { images } = props;
  return (
    <div className='property__gallery-container container'>
      <div className='property__gallery'>
        {images.map((elem) => (
          <div key={elem.id} className='property__image-wrapper'>
            <img
              className='property__image'
              src={elem.imgSrc}
              alt={elem.imgAlt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyGallery;

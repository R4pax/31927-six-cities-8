/* eslint-disable jsx-a11y/img-redundant-alt */
function PropertyGallery(): JSX.Element {
  const images: { id: number; imgSrc: string; imgAlt: string }[] = [
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

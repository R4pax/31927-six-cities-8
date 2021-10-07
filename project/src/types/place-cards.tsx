export type placeCard = {
  id: number;
  isPremium?: boolean;
  isFavorite?: boolean;
  imgSrc: string;
  imgAlt: string;
  priceValue: number;
  ratingPercents: number;
  placeName: string;
  placeType: string;
};

export type placeCards = placeCard[];


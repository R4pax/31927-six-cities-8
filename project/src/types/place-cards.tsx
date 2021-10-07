export type PlaceCard = {
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

export type PlaceCards = PlaceCard[];


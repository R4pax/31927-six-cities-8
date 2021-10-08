export type PlaceCardData = {
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


export type FavoritePlacesData = {
  id: number;
  town: string;
  places: PlaceCardData[];
}

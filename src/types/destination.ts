import { CategoryType } from "./category";

export type Destination = {
  id: string;
  title: string;
  duration: string;
  distance: string;
  weather: string;
  price: number;
  category: CategoryType;
  shortDescription: string;
  longDescription: string;
  image: number;
};

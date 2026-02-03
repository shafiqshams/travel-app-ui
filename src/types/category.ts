// Category Enum
export enum CategoryType {
  OCEAN = "ocean",
  MOUNTAIN = "mountain",
  BEACH = "beach",
  FOREST = "forest",
  DESERT = "desert",
  WATERFALL = "waterfall",
  LAKE = "lake",
}

export interface Category {
  id: number;
  slug: CategoryType;
  title: string;
  image: number;
}

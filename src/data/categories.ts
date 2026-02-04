import { Category, CategoryType } from "../types/category";

export const categories: Category[] = [
  {
    id: 1,
    slug: CategoryType.OCEAN,
    title: "Ocean",
    image: require("../../assets/images/categories/ocean.webp"),
  },
  {
    id: 2,
    slug: CategoryType.MOUNTAIN,
    title: "Mountain",
    image: require("../../assets/images/categories/mountain.webp"),
  },
  {
    id: 3,
    slug: CategoryType.BEACH,
    title: "Beach",
    image: require("../../assets/images/categories/beach.webp"),
  },
  {
    id: 4,
    slug: CategoryType.FOREST,
    title: "Forest",
    image: require("../../assets/images/categories/forest.webp"),
  },
  {
    id: 5,
    slug: CategoryType.DESERT,
    title: "Desert",
    image: require("../../assets/images/categories/desert.webp"),
  },
  {
    id: 6,
    slug: CategoryType.WATERFALL,
    title: "Waterfall",
    image: require("../../assets/images/categories/waterfall.webp"),
  },
  {
    id: 7,
    slug: CategoryType.LAKE,
    title: "Lake",
    image: require("../../assets/images/categories/lake.webp"),
  },
];

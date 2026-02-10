import { CategoryType } from "../types/category";
import { Destination } from "../types/destination";

export const filterDestinations = (
  destinations: Destination[],
  searchText: string,
  selectedFilter: string = "All",
  selectedCategory: CategoryType | undefined,
): Destination[] => {
  let results = destinations;

  if (selectedCategory) {
    results = getFilteredDestinationsByCategory(selectedCategory, destinations);
  }

  if (selectedFilter !== "All") {
    results = getFilteredDestinations(selectedFilter, destinations);
  }

  const query = searchText?.trim().toLowerCase();

  if (query) {
    results = results.filter((d) => d.title.toLowerCase().includes(query));
  }

  return results;
};

const getFilteredDestinations = (
  selectedFilter: string,
  destinations: Destination[],
) => {
  switch (selectedFilter) {
    case "Popular":
      return destinations.filter((destination) => destination.rating >= 4.2);

    case "Recommended":
      return destinations.filter(
        (destination) => destination.rating >= 3.5 && destination.price <= 1800,
      );

    case "Budget":
      return destinations.filter((destination) => destination.price <= 1000);

    default:
      return destinations;
  }
};

const getFilteredDestinationsByCategory = (
  selectedCategory: CategoryType,
  destinations: Destination[],
): Destination[] => {
  return destinations.filter((d) => d.category === selectedCategory);
};

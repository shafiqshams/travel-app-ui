import { Destination } from "../types/destination";

export const filterDestinations = (
  destinations: Destination[],
  searchText: string,
  selectedFilter: string = "All",
): Destination[] => {
  let results = destinations;

  if (selectedFilter !== "All") {
    results = getFilteredDestinations(selectedFilter, destinations);
  }

  const query = searchText?.trim().toLowerCase();

  if (query) {
    results = results.filter((d) => d.title.toLowerCase().includes(query));
  }

  return results;
};

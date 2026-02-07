import { Destination } from "../types/destination";

export const filterDestinations = (
  destinations: Destination[],
  searchText: string,
): Destination[] => {
  let results = destinations;

  const query = searchText?.trim().toLowerCase();

  if (query) {
    results = results.filter((d) => d.title.toLowerCase().includes(query));
  }

  return results;
};

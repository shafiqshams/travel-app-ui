import { Destination } from "../types/destination";

export const filterDestinations = (
  destinations: Destination[],
  searchText: string,
): Destination[] => {
  if (!searchText) return destinations;

  const query = searchText.toLowerCase().trim();

  return destinations.filter((destination) =>
    destination.title.toLowerCase().includes(query),
  );
};

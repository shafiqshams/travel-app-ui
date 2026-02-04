import clsx from "clsx";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const FilterBar = () => {
  const filters = ["All", "Popular", "Recommended", "More"];
  const [selectedFilter, setSelectedFilter] = React.useState<string>("Popular");

  return (
    <View className="flex flex-row justify-around items-center my-8 p-1 bg-neutral-100 rounded-full">
      {filters.map((filter) => {
        const isSelected = selectedFilter === filter;

        return (
          <TouchableOpacity
            onPress={() => setSelectedFilter(filter)}
            className={clsx(
              "p-4 my-1 rounded-full",
              isSelected && "bg-red-300",
            )}
            key={`filter - ${filter}`}
          >
            <Text
              className={clsx(
                "tracking-wide text-md  text-neutral-700",
                isSelected && "font-extrabold",
              )}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilterBar;

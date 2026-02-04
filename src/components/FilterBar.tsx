import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const FilterBar = () => {
  const filters = ["All", "Popular", "Recommended", "More"];
  const [selectedFilter, setSelectedFilter] = React.useState<string>("Popular");

  return (
    <View className="flex flex-row justify-around items-center my-8 p-1 bg-neutral-100 rounded-full">
      {filters.map((filter) => {
        return (
          <TouchableOpacity
            onPress={() => setSelectedFilter(filter)}
            key={`filter - ${filter}`}
          >
            <Text>{filter}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilterBar;

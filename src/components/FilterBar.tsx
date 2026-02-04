import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const FilterBar = () => {
  const filters = ["All", "Popular", "Recommended", "More"];
  const [selectedFilter, setSelectedFilter] = React.useState<string>("Popular");
  console.log("selectedFilter", selectedFilter);
  return (
    <View>
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

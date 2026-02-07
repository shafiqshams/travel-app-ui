import React from "react";
import { View } from "react-native";
import { Destination } from "../types/destination";
import DestinationItem from "./DestinationItem";

interface DestinationListProps {
  destinations: Destination[];
}

const DestinationList = ({ destinations }: DestinationListProps) => {
  return (
    <View className="flex-row flex-wrap justify-between">
      {destinations.map((destination) => (
        <DestinationItem key={destination.id} destination={destination} />
      ))}
    </View>
  );
};

export default DestinationList;

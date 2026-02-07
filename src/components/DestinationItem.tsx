import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Destination } from "../types/destination";

interface DestinationItemProps {
  destination: Destination;
}

const DestinationItem = ({ destination }: DestinationItemProps) => {
  const { id, title, shortDescription, image } = destination;
  return (
    <TouchableOpacity
      className="w-52 h-72 justify-end items-start mb-5 p-4 rounded-3xl"
      onPress={() => console.log("Navgate to details screen with id ", id)}
    >
      <Image
        source={image}
        className="w-52 h-72 rounded-3xl absolute"
        resizeMode="cover"
      />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.95)"]}
        className="absolute bottom-0 left-0 right-0 top-0 "
        style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
        start={{ x: 0.5, y: 0.4 }}
        end={{ x: 0.5, y: 1 }}
      />

      <Text className="text-white font-bold text-lg">{title}</Text>
      <Text
        className="text-white font-normal text-sm"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {shortDescription}
      </Text>
    </TouchableOpacity>
  );
};

export default React.memo(DestinationItem);

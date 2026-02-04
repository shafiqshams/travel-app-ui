import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

type CategoryItemProps = {
  id: number;
  title: string;
  image: number;
};

const CategoryItem = ({ id, title, image }: CategoryItemProps) => {
  return (
    <TouchableOpacity
      className="items-center gap-2 mr-3"
      onPress={() => console.log("category id ", id)}
    >
      <Image
        source={image}
        style={{ width: 96, height: 96, resizeMode: "contain" }}
        className="w-20 h-20 rounded-2xl"
      />
      <Text className="font-medium text-neutral-400">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

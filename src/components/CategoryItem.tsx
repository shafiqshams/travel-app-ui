import clsx from "clsx";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Category, CategoryType } from "../types/category";

interface CategoryItemProps {
  category: Category;
  isSelected: boolean;
  onSelectCategory: (slug: CategoryType) => void;
}

const CategoryItem = ({
  category,
  isSelected,
  onSelectCategory,
}: CategoryItemProps) => {
  const { title, image, slug } = category;
  return (
    <TouchableOpacity
      className={clsx(
        "items-center gap-2 p-2 mr-1 bg-neutral-100 rounded-2xl",
        isSelected && "bg-red-200",
      )}
      onPress={() => onSelectCategory(slug)}
    >
      <Image
        source={image}
        style={{ width: 96, height: 96, resizeMode: "contain" }}
        className="w-20 h-20 rounded-2xl"
      />
      <Text
        className={clsx(
          "font-medium text-neutral-700",
          isSelected && "font-bold text-md",
        )}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

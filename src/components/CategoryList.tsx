import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Category, CategoryType } from "../types/category";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {
  categories: Category[];
  selectedCategory: CategoryType | undefined;
  onSelectCategory: (categoryType: CategoryType) => void;
}

const CategoryList = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) => {
  const renderCategoryItem = ({ item }: { item: Category }) => (
    <CategoryItem
      category={item}
      isSelected={item.slug === selectedCategory}
      onSelectCategory={onSelectCategory}
    />
  );

  return (
    <View className="w-full h-25 my-4">
      <View className="flex-row justify-between items-end my-4 ">
        <Text className="font-semibold text-neutral-600 text-2xl">
          Categories
        </Text>

        <TouchableOpacity>
          <Text className="font-bold text-red-300 text-lg underline">
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.slug}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
        initialNumToRender={4}
      />
    </View>
  );
};

export default CategoryList;

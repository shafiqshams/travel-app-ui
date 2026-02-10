import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Category, CategoryType } from "../types/category";
import CategoryItem from "./CategoryItem";

interface CategoryListProps {
  categories: Category[];
  selectedCategory: CategoryType | undefined;
  onSelectCategory: (categoryType: CategoryType) => void;
  onResetCategory: () => void;
}

const CategoryList = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onResetCategory,
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

        {selectedCategory && (
          <TouchableOpacity
            onPress={onResetCategory}
            className="bg-red-200 rounded-full p-0.2"
          >
            <AntDesign name="close-circle" size={24} color="gray" />
          </TouchableOpacity>
        )}
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

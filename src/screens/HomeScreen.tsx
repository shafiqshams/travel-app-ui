import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryList from "../components/CategoryList";
import FilterBar from "../components/FilterBar";
import Search from "../components/Search";
import { categories } from "../data/categories";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <SafeAreaView className="flex flex-1 bg-white">
      <ScrollView className="mx-5" showsVerticalScrollIndicator={false}>
        {/* Home Header */}
        <View className="flex-row justify-between items-center my-4">
          <Text className="font-bold text-neutral-700 text-3xl">
            Explore Top Places
          </Text>

          <Image
            source={require("../../assets/images/profile.webp")}
            className="w-16 h-16 rounded-full"
            resizeMode="contain"
          />
        </View>
        {/* SearchBar */}
        <Search searchText={searchText} onChangeText={setSearchText} />

        {/* Categories */}
        <CategoryList categories={categories} />

        {/* FilterBar */}
        <FilterBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

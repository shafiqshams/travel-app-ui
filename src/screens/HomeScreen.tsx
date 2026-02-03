import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex flex-1 bg-white">
      <ScrollView
        className="mx-5"
        showsVerticalScrollIndicator={false}
      ></ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

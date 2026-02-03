import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex flex-1 bg-white">
      <ScrollView className="mx-5" showsVerticalScrollIndicator={false}>
        {/* Home Header */}
        <View className="flex-row justify-between items-center my-4">
          <Text className="font-bold text-neutral-700 text-3xl">
            Explore Top Places
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

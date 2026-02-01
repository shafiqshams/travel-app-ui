import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../navigation/RootStack";

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View className="flex flex-1 justify-end">
      <Image
        source={require("../../assets/images/welcome.webp")}
        className="w-full h-full absolute"
      />

      <View className="p-5 pb-10">
        <View className="flex-col gap-2">
          <Text className="text-white font-bold text-5xl">Travel smarter.</Text>
          <Text className="text-white font-bold text-4xl">Travel better.</Text>
          <Text className="text-neutral-200 font-medium text-xl">
            Plan, book, and explore the world—without the stress.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="mt-5 bg-red-400 rounded-full py-4 px-8 mx-auto"
        >
          <Text className="text-white font-bold text-lg">Explore Now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

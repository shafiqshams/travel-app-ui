import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { RootStackParamList } from "../navigation/RootStack";

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return <View className="flex flex-1"></View>;
};

export default WelcomeScreen;

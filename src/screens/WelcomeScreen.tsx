import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, View } from "react-native";
import { RootStackParamList } from "../navigation/RootStack";

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View className="flex flex-1 justify-end">
      <Image
        source={require("../../assets/images/welcome.webp")}
        className="w-full h-full absolute"
      />
    </View>
  );
};

export default WelcomeScreen;

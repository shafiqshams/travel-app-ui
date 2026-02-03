import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { TextInput, View } from "react-native";

interface Props {
  searchText: string;
  onChangeText: (text: string) => void;
}

const Search = ({ searchText, onChangeText }: Props) => {
  return (
    <View className="flex-row justify-start items-center bg-neutral-100 p-4 my-4 rounded-full">
      <Feather name="search" size={24} color="gray" />
      <TextInput
        placeholder="Search destinations"
        className="ml-4 tracking-wide text-lg text-neutral-600"
        value={searchText}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Search;

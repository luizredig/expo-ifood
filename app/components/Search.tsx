import { Feather } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";

const Search = () => {
  return (
    <>
      <View className="relative w-full">
        <TextInput
          placeholder="Busque restaurantes"
          className="h-10 rounded-xl bg-gray-200 px-4"
        />
      </View>

      <Pressable
        className="absolute right-5 flex h-10 w-10 items-center justify-center rounded-xl bg-red-500"
        onPress={() => {}}
      >
        <Feather name="search" size={20} color={"#fff"} />
      </Pressable>
    </>
  );
};

export default Search;

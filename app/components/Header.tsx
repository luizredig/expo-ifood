import { Image, Pressable, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <>
      <View className="flex h-16 w-full flex-row items-center justify-between px-5 pb-0">
        <Pressable
          onPress={() => {}}
          className="flex flex-row items-center justify-center gap-2"
        >
          <Image
            source={require("../../assets/images/expo-logo.png")}
            className="h-[20px] w-[71px]"
          />

          <Text className="text-xl font-semibold">+</Text>

          <Image
            source={require("../../assets/images/ifood-logo.png")}
            className="h-[20px] w-[37px]"
          />
        </Pressable>

        <Pressable
          onPress={() => {}}
          className="flex h-10 w-10 items-center justify-center"
        >
          <Entypo name="menu" size={24} className="text-[#323232]" />
        </Pressable>
      </View>
    </>
  );
};

export default Header;

import { ScrollView, View } from "react-native";

import Constants from "expo-constants";
import Header from "./components/Header";
import Search from "./components/Search";

const statusBarHeight = Constants.statusBarHeight;

const marginTop = statusBarHeight + 8;

export default function Index() {
  return (
    <ScrollView
      className="flex w-full flex-col"
      style={{ marginTop }}
      showsVerticalScrollIndicator={false}
    >
      <View className="h-16 w-full px-5">
        <Header />
      </View>

      <View className="flex w-full flex-row items-center justify-between px-5 py-6">
        <Search />
      </View>
    </ScrollView>
  );
}

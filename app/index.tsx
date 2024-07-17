import { ScrollView } from "react-native";

import Constants from "expo-constants";
import Header from "./components/Header";

const statusBarHeight = Constants.statusBarHeight;

const marginTop = statusBarHeight + 8;

export default function Index() {
  return (
    <ScrollView
      className="flex flex-1"
      style={{ marginTop }}
      showsVerticalScrollIndicator={false}
    >
      <Header />
    </ScrollView>
  );
}

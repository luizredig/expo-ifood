import { Alert, Image, ScrollView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";
import Header from "./components/Header";
import Search from "./components/Search";
import { Category } from "@prisma/client";
import { useEffect, useState } from "react";
import { api } from "./server/api";
import { isAxiosError } from "axios";
import CategoryItem from "./components/CategoryItem";

const statusBarHeight = Constants.statusBarHeight;

const marginTop = statusBarHeight + 8;

export default function Index() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/category");
        setCategories(response.data.categories);
      } catch (error) {
        if (isAxiosError(error)) {
          return Alert.alert("Error", error.response?.data);
        }
      }
    };

    fetchCategories();
  }, []);

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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.categoryContainer}>
          {categories.length > 0 &&
            categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 6,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 12,
    height: 56,
  },
});

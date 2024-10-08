import { Alert, ScrollView, StyleSheet, View } from "react-native";

import Constants from "expo-constants";
import Header from "./components/Header";
import Search from "./components/Search";
import { Category, Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { api } from "./server/api";
import { isAxiosError } from "axios";
import CategoryItem from "./components/CategoryItem";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";

const statusBarHeight = Constants.statusBarHeight;

const marginTop = statusBarHeight + 8;

export default function Index() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/category");
        setCategories(response.data.categories);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);

          return Alert.alert("Error", error.message);
        }
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await api.post("/product", {
          data: {
            where: {
              discountPercentage: { gt: 0 },
            },
            include: {
              restaurant: true,
            },
            take: 6,
          },
        });
        setRecommendedProducts(response.data.products);
      } catch (error) {
        if (isAxiosError(error)) {
          return Alert.alert("Error", error.message);
        }
      }
    };

    fetchCategories();
    fetchProducts();
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

      <View className="w-full rounded-xl px-5 pb-6">
        <Banner
          source={require("../assets/images/first-banner.png")}
          className="h-48 w-full rounded-xl"
        />
      </View>

      <View className="w-full pb-6">
        <ProductSection
          title="Pedidos recomendados"
          products={recommendedProducts}
        />
      </View>

      <View className="w-full rounded-xl px-5 pb-6">
        <Banner
          source={require("../assets/images/burguers-banner.png")}
          className="h-48 w-full rounded-xl"
        />
      </View>
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

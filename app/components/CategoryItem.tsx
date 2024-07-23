import { Category } from "@prisma/client";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <View
      className="flex h-14 flex-row items-center justify-center rounded-full bg-white p-4"
      style={styles.shadowSm}
    >
      <Pressable onPress={() => {}} style={styles.pressable}>
        <View>
          <Image
            source={{
              uri: category.imageUrl,
            }}
            style={styles.image}
          />
        </View>

        <Text className="text-sm font-semibold">{category.name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: "contain",
  },
  shadowSm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  shadowMd: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default CategoryItem;

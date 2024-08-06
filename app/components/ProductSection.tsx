import { Product } from "@prisma/client";
import { ScrollView, Text, View } from "react-native";
import ProductItem from "./ProductItem";
import { Link } from "expo-router";

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <>
      <View className="flex w-full flex-col gap-4">
        <View className="flex flex-row justify-between px-5">
          <Text className="font-semibold">{title}</Text>

          <Link href={""}>
            <Text className="text-red-500">See all</Text>
          </Link>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="h-[219px] w-full px-5"
        >
          <View className="flex w-full flex-row gap-4 pr-10">
            {products.length > 0 &&
              products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ProductSection;

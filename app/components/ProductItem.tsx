import { Product, Restaurant } from "@prisma/client";
import { Image, Pressable, Text, View } from "react-native";
import DiscountBadge from "./DiscountBadge";

interface ProductItemProps {
  product: Product & { restaurant?: Restaurant };
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <>
      <Pressable onPress={() => {}}>
        <View className="flex h-full w-[150px] flex-col gap-2">
          <View className="h-[150px] w-full">
            <Image
              source={{ uri: product.imageUrl }}
              className="h-[150px] w-[150px] rounded-xl"
              resizeMode="cover"
            />
          </View>

          <View>
            <Text>{product.name}</Text>

            <View className="flex flex-row items-center gap-1">
              <Text className="font-semibold">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(product.price))}
              </Text>

              {product.discountPercentage > 0 && (
                <Text className="text-sm text-gray-300 line-through">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(product.price))}
                </Text>
              )}
            </View>

            {product.restaurant && (
              <Text className="text-sm text-gray-300">
                {product.restaurant.name}
              </Text>
            )}
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default ProductItem;

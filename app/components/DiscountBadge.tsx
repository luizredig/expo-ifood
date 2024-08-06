import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface DiscountBadgeProps {
  discountPercentage: string | number;
}

const DiscountBadge = ({ discountPercentage }: DiscountBadgeProps) => {
  return (
    <>
      <View className="absolute left-2 top-2 z-10 flex flex-row items-center justify-center rounded-full bg-red-600 px-2 py-0.5">
        <View className="flex flex-row gap-0.5">
          <Feather name="arrow-down" size={20} color={"#fff"} />

          <Text className="text-sm font-semibold text-white">
            {discountPercentage}%
          </Text>
        </View>
      </View>
    </>
  );
};

export default DiscountBadge;

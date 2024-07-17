import { Image, ImageSourcePropType, View } from "react-native";

interface BannerProps {
  source: ImageSourcePropType | undefined;
  viewClassName?: string;
  imageClassName?: string;
}

const Banner = ({ source, imageClassName, viewClassName }: BannerProps) => {
  return (
    <>
      <View className={viewClassName}>
        <Image source={source} className={imageClassName} />
      </View>
    </>
  );
};

export default Banner;

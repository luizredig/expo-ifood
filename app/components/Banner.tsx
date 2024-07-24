import { Image, ImageSourcePropType } from "react-native";

interface BannerProps {
  source: ImageSourcePropType | undefined;
  className?: string;
}

const Banner = ({ source, className }: BannerProps) => {
  return (
    <>
      <Image source={source} className={className} resizeMode="contain" />
    </>
  );
};

export default Banner;

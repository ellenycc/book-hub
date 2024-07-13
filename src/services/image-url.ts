import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const displayImagePlaceholder = (url: string) => {
  if (!url) return noImage;
  return url;
};

export default displayImagePlaceholder;

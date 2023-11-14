import Image from "next/image";

const ImageIcon = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={20}
      height={20}
      blurDataURL="data:..."
    />
  );
};
export default ImageIcon;

import Image from "next/image";

const ImageMiniature = ({ source, altText }) => {
  return (
    <Image
      src={source}
      width={90}
      height={90}
      alt={altText}
      className="rounded-2xl border-2 border-transparent hover:border-slate-700 hover:scale-95 flex-1"
    />
  );
};

export default ImageMiniature;

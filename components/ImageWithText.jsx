import Image from "next/image";

const ImageWithText = ({ details, flexRow }) => {
  const { imgSrc, altTxt, title, paragraph } = details;

  return (
    <div
      className={`flex flex-col ${flexRow} justify-center items-center w-full my-4`}
    >
      <Image
        src={imgSrc}
        width={600}
        height={600}
        priority
        alt={altTxt}
        className="rounded-3xl flex-1"
      />
      <div className="px-8">
        <h3 className="my-6 font-semibold text-3xl text-center md:text-left">
          {title}
        </h3>
        <p className="max-w-prose ">{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageWithText;

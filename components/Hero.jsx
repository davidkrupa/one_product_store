import Image from "next/image";

import headphones from "../assets/5.jpg";
import {
  InteractiveTabs,
  Timer,
  TabsHighlights,
  TabsDescription,
  TabsSpecification,
  ImageMiniature,
} from ".";

const Hero = () => {
  const productTabs = {
    highlights: {
      name: "Highlights",
      component: <TabsHighlights />,
    },
    specification: {
      name: "Specification",
      component: <TabsSpecification />,
    },
    description: {
      name: "Description",
      component: <TabsDescription />,
    },
  };

  return (
    <div className="flex flex-col items-center rounded-3xl bg-slate-200">
      <div className="flex md:flex-row flex-col justify-center items-center max-w-5xl w-full px-6 py-4 gap-6">
        <div className="flex flex-col self-start flex-1 w-full gap-4 relative">
          <Image
            src={headphones}
            width={600}
            height={600}
            priority
            alt="headphones"
            className="rounded-3xl flex-1"
          />

          <div className="absolute flex justify-start items-center top-[10%] left-0 w-16 h-10 rounded-r-full bg-red-500">
            <p className="text-sm font-semibold ml-2 text-white">- 10%</p>
          </div>

          <div className="flex justify-start gap-3 max-w-md">
            <ImageMiniature source={headphones} altText={"black headphones"} />
            <ImageMiniature source={headphones} altText={"black headphones"} />
            <ImageMiniature source={headphones} altText={"black headphones"} />
          </div>
        </div>

        <div className="flex flex-col self-start flex-1 my-2">
          <h2 className="text-4xl font-bold leading-normal">
            Wireless Headphones XHG 7Pro
          </h2>
          <p className="text-4xl font-bold my-8 text-red-500">
            $270{" "}
            <span className="text-xl font-semibold line-through text-gray-500">
              $295
            </span>
          </p>
          <div className="flex gap-3 mb-4">
            <div className="w-7 h-7 rounded-full border-2 border-slate-100 hover:border-slate-900 bg-slate-600" />
            <div className="w-7 h-7 rounded-full border-2 border-slate-100 hover:border-slate-900 bg-neutral-400" />
            <div className="w-7 h-7 rounded-full border-2 border-slate-100 hover:border-slate-900 bg-red-500" />
          </div>
          <p className="text-2xl font-bold mb-4">Sale Ends In:</p>

          <Timer />

          <hr className="border-t-[1px] mt-6 border-slate-600" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center mt-6 gap-4 lg:gap-8">
            <div className="flex items-center gap-2 w-1/2">
              <button className="w-12 h-12 flex-grow-0 flex-shrink-0 rounded-full font-medium text-2xl text-white bg-slate-500 hover:bg-slate-600 transition-colors ease-in-out">
                -
              </button>
              <p className=" px-8 py-2 text-center flex-1 rounded-full border-2 border-slate-800">
                1
              </p>
              <button className="w-12 h-12 flex-grow-0 flex-shrink-0 rounded-full font-medium text-2xl text-white bg-slate-500 hover:bg-slate-600 transition-colors ease-in-out">
                +
              </button>
            </div>

            <button className="px-8 py-4 w-full rounded-full font-semibold text-white bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <InteractiveTabs tabs={productTabs} />
    </div>
  );
};

export default Hero;

import Image from "next/image";

import headphones from "../assets/5.jpg";
import { Timer } from ".";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center max-w-5xl w-full px-6 py-4 gap-6 rounded-3xl bg-slate-200">
      <div className="flex flex-col self-start flex-1 w-full gap-4">
        <Image
          src={headphones}
          width={600}
          height={600}
          priority
          alt="headphones"
          className="rounded-3xl flex-1"
        />
        <div className="flex justify-start gap-3 max-w-md">
          <Image
            src={headphones}
            width={90}
            height={90}
            alt="headphones"
            className="rounded-2xl border-2 border-transparent hover:border-slate-700 hover:scale-95 flex-1"
          />
          <Image
            src={headphones}
            width={90}
            height={90}
            alt="headphones"
            className="rounded-2xl border-2 border-transparent hover:border-slate-700 hover:scale-95 flex-1"
          />
          <Image
            src={headphones}
            width={90}
            height={90}
            alt="headphones"
            className="rounded-2xl border-2 border-transparent hover:border-slate-700 hover:scale-95 flex-1"
          />
        </div>
      </div>

      <div className="flex flex-col self-start flex-1 my-2">
        <h2 className="text-4xl font-bold leading-normal mb-5">
          Wireless Headphones XHG 7Pro
        </h2>
        <p className="text-3xl font-semibold mb-4">
          $270 <span className="text-xl font-normal">$295</span>
        </p>
        <div className="flex gap-3 mb-4">
          <div className="w-7 h-7 rounded-full border-2 border-slate-100 hover:border-slate-900 bg-slate-600" />
          <div className="w-7 h-7 rounded-full border-2 border-slate-100 hover:border-slate-900 bg-neutral-400" />
          <div className="w-7 h-7 rounded-full border-2 border-slate-100 hover:border-slate-900 bg-red-500" />
        </div>
        <p className="text-2xl font-bold mb-4">Sale Ends In:</p>

        <Timer />

        <hr />

        <div className="flex flex-col lg:flex-row items-start lg:items-center mt-6 gap-4 lg:gap-8">
          <div className="flex items-center gap-2">
            <button className="w-12 h-12 rounded-full font-semibold text-lg bg-slate-500">
              -
            </button>
            <p className="px-8 py-2 rounded-full border-2 border-slate-800">
              1
            </p>
            <button className="w-12 h-12 rounded-full font-semibold text-lg bg-slate-500">
              +
            </button>
          </div>

          <button className="px-8 py-4 rounded-full w-full bg-slate-500">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

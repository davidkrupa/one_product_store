import Image from "next/image";

import headphones from "../assets/5.jpg";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center max-w-5xl w-full px-6 py-4 gap-6 rounded-3xl bg-slate-200">
      <div className="flex flex-col flex-1 w-full gap-4">
        <Image
          src={headphones}
          width={500}
          height={500}
          alt="headphones"
          className="rounded-3xl"
        />
        <div className="flex flex-1 justify-start gap-3">
          <Image
            src={headphones}
            width={110}
            height={110}
            alt="headphones"
            className="rounded-2xl border-0 hover:border-2 border-slate-700"
          />
          <Image
            src={headphones}
            width={110}
            height={110}
            alt="headphones"
            className="rounded-2xl border-0 hover:border-2 border-slate-700"
          />
          <Image
            src={headphones}
            width={110}
            height={110}
            alt="headphones"
            className="rounded-2xl border-0 hover:border-2 border-slate-700"
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
        <p className="text-2xl font-bold">Sale Ends In:</p>
        <div>Timer</div>
        <hr />
        <div className="flex">
          <div className="flex gap-2">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

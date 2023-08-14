import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-24 text-white text-sm bg-slate-800">
      <div className="flex justify-center items-center gap-4 w-full  ">
        <Link
          href="/contact"
          className="hover:underline hover:underline-offset-4"
        >
          Contact
        </Link>
        <Link
          href="/shipping"
          className="hover:underline hover:underline-offset-4"
        >
          Shipping
        </Link>
        <Link
          href="/privacy-policy"
          className="hover:underline hover:underline-offset-4"
        >
          Privacy Policy
        </Link>
        <Link
          href="/refund-policy"
          className="hover:underline hover:underline-offset-4"
        >
          Refund Policy
        </Link>
      </div>
      <p className="font-semibold">©XHG Pro 2023</p>
    </div>
  );
};

export default Footer;

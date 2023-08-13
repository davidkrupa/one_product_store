"use client";

import { useState } from "react";
import { IconWithText, Multicolumn } from ".";
import { FaCheckCircle, FaShippingFast, FaHeadphonesAlt } from "react-icons/fa";

const GuaranteeBanner = () => {
  const [guarantee, setGuarantee] = useState([
    {
      icon: <FaCheckCircle />,
      title: "Secure Checkout",
      text: "Our checkout process is PCI compliant and uses industry-standard SSL encryption to keep your information safe.",
    },
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      text: "Enjoy our high-quality headphones without having to worry about any shipping costs on all orders within the United States.",
    },
    {
      icon: <FaHeadphonesAlt />,
      title: "Customer support",
      text: "Customer support team is always here to help. We offer multiple ways to get in touch, including email and live chat.",
    },
  ]);

  return (
    <>
      <Multicolumn cols={"md:grid-cols-3"}>
        {guarantee?.map((item) => (
          <IconWithText details={item} />
        ))}
      </Multicolumn>
    </>
  );
};

export default GuaranteeBanner;

import { IconWithText, Multicolumn } from ".";

const GuaranteeBanner = () => {
  const columns = [
    {
      icon: "",
      title: "Secure Checkout",
      text: "Our checkout process is PCI compliant and uses industry-standard SSL encryption to keep your information safe.",
    },
    {
      icon: "",
      title: "Free Shipping",
      text: "Enjoy our high-quality headphones without having to worry about any shipping costs on all orders within the United States.",
    },
    {
      icon: "",
      title: "Customer support",
      text: "Customer support team is always here to help. We offer multiple ways to get in touch, including email and live chat.",
    },
  ];
  return (
    <>
      <Multicolumn cols={3}>
        {columns?.map((item) => (
          <IconWithText details={item} />
        ))}
      </Multicolumn>
    </>
  );
};

export default GuaranteeBanner;

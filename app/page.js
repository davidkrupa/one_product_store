import {
  Hero,
  ProductPresentation,
  Multicolumn,
  Faq,
  CustomersOpinions,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center md:px-8 py-8">
      <Hero />
      <ProductPresentation />
      <Multicolumn />
      <Faq />
      <CustomersOpinions />
    </main>
  );
}

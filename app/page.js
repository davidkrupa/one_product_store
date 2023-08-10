import {
  Hero,
  ProductPresentation,
  Faq,
  CustomersOpinions,
  GuaranteeBanner,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center md:px-8 py-8">
      <Hero />
      <ProductPresentation />
      <GuaranteeBanner />
      <Faq />
      <CustomersOpinions />
    </main>
  );
}

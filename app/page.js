import {
  Hero,
  ProductPresentation,
  Faq,
  CustomersOpinions,
  GuaranteeBanner,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-6">
      <Hero />
      <ProductPresentation />
      <GuaranteeBanner />
      <Faq />
      <CustomersOpinions />
      <Footer />
    </main>
  );
}

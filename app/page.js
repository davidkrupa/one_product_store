import {
  Hero,
  InteractiveTabs,
  ImageWithText,
  Multicolumn,
  Faq,
  CustomersOpinions,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center md:px-8 py-8">
      <Hero />
      <InteractiveTabs />
      <ImageWithText />
      <Multicolumn />
      <Faq />
      <CustomersOpinions />
    </main>
  );
}

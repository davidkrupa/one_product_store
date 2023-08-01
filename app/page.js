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
    <main className="flex flex-col items-center p-24">
      <Hero />
      <InteractiveTabs />
      <ImageWithText />
      <Multicolumn />
      <Faq />
      <CustomersOpinions />
    </main>
  );
}

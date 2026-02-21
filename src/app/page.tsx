import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyDeodorant from "@/components/WhyDeodorant";
import ProductVariants from "@/components/ProductVariants";
import Features from "@/components/Features";
import Ambassador from "@/components/Ambassador";
import HowToUse from "@/components/HowToUse";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <main>
        <Hero />
        <WhyDeodorant />
        <ProductVariants />
        <Features />
        <Ambassador />
        <HowToUse />
      </main>
      <Footer />
    </>
  );
}

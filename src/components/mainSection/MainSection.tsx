import HeroSection from "./HeroSection";
import ProductFeatures from "./productFeatures/ProductFeatures";

const MainSection = () => {
  return (
    <main className="child-grid mt-[1.875rem] ">
      <HeroSection />
      <ProductFeatures />
    </main>
  );
};

export default MainSection;

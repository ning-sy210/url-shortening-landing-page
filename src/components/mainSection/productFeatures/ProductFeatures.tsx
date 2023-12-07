import ShortenUrlSection from "./shortenUrlSection/ShortenUrlSection";
import FeatureList from "./FeatureList";

const ProductFeatures = () => {
  return (
    <div className="full-width child-grid pb-20 bg-slate-100 desktop:pb-[13.0625rem]">
      <ShortenUrlSection />

      <section className="content">
        <h2 className="text-mobile-h2 text-neutral-3 desktop:text-[2.5rem] desktop:tracking-tight">
          Advanced Statistics
        </h2>
        <div className="flex justify-center">
          <p
            className="mt-[1.125rem] text-default text-neutral-2 leading-7 
            desktop:mt-[1.25rem] desktop:text-[1.125rem] desktop:leading-8 desktop:tracking-[0.005rem] max-w-[33.75rem]"
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <FeatureList />
      </section>
    </div>
  );
};

export default ProductFeatures;

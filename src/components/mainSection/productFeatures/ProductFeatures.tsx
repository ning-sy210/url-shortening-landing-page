import ShortenUrlInputSection from "../shortenUrlInputSection/ShortenUrlInputSection";
import FeatureList from "./FeatureList";

const ProductFeatures = () => {
  return (
    <div className="full-width child-grid pb-20 bg-slate-100">
      <ShortenUrlInputSection />

      <section className="content">
        <h2 className="text-mobile-h2 text-neutral-3">Advanced Statistics</h2>
        <p className="mt-[1.125rem] text-default text-neutral-2 leading-7">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <FeatureList />
      </section>
    </div>
  );
};

export default ProductFeatures;

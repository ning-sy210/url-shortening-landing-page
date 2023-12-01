import FeatureList from "./FeatureList";

const ProductFeatures = () => {
  return (
    <section className="full-width child-grid bg-slate-100 pt-mobile-section-connector pb-20">
      <h2 className="content text-mobile-h2 text-neutral-3">
        Advanced Statistics
      </h2>
      <p className="content mt-[1.125rem] text-default text-neutral-2 leading-7">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <FeatureList />
    </section>
  );
};

export default ProductFeatures;

import { Fragment } from "react";
import BrandRecognitionIcon from "../../../assets/images/icon-brand-recognition.svg";
import DetailedRecordsIcon from "../../../assets/images/icon-detailed-records.svg";
import FullyCustomizableIcon from "../../../assets/images/icon-fully-customizable.svg";

type FeatureCardType = {
  svgIcon: string;
  heading: string;
  desc: string;
};

const features: FeatureCardType[] = [
  {
    svgIcon: BrandRecognitionIcon,
    heading: "Brand Recognition",
    desc: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    svgIcon: DetailedRecordsIcon,
    heading: "Detailed Records",
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    svgIcon: FullyCustomizableIcon,
    heading: "Fully Customizable",
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const FeatureList = () => {
  return (
    <div className="child-grid mt-[5.5rem]">
      {features.map((feature, i) => (
        <Fragment key={feature.heading}>
          {i !== 0 && (
            <div className="content justify-self-center w-2 h-[5.75rem] bg-primary-1"></div>
          )}
          <FeatureCard
            svgIcon={feature.svgIcon}
            heading={feature.heading}
            desc={feature.desc}
          />
        </Fragment>
      ))}
    </div>
  );
};

const FeatureCard = ({ svgIcon, heading, desc }: FeatureCardType) => {
  const paddingBottom = svgIcon === DetailedRecordsIcon ? "pb-8" : "pb-10";

  return (
    <section
      className={`relative content grid justify-items-center bg-white rounded-md px-8 pt-[4.75rem] ${paddingBottom}`}
    >
      <div className="absolute -top-11 bg-primary-2 rounded-full w-[5.5rem] h-[5.5rem] grid place-items-center">
        <img src={svgIcon} alt={`${heading} icon`} className="" />
      </div>
      <h3 className="text-mobile-h3 text-neutral-3">{heading}</h3>
      <p className="mt-4 text-mobile-p-sm text-neutral-2">{desc}</p>
    </section>
  );
};

export default FeatureList;

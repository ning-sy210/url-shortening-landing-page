import { Fragment } from "react";
import BrandRecognitionIcon from "/icons/icon-brand-recognition.svg";
import DetailedRecordsIcon from "/icons/icon-detailed-records.svg";
import FullyCustomizableIcon from "/icons/icon-fully-customizable.svg";

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
    <div className="mt-[5.5rem] grid desktop:mt-[6.125rem] desktop:flex desktop:items-center desktop:text-left">
      {features.map((feature, i) => (
        <Fragment key={feature.heading}>
          {/* card connector */}
          {i !== 0 && (
            <div
              className="justify-self-center w-2 h-[5.75rem] bg-primary-1 
              desktop:relative desktop:top-[1.4375rem] desktop:h-2 desktop:flex-grow"
            ></div>
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
      className={`relative grid justify-items-center bg-white rounded-md px-8 pt-[4.75rem] ${paddingBottom} 
      desktop:justify-items-start desktop:max-w-[350px] desktop:pb-10 desktop:[&:nth-of-type(2)]:top-[2.6875rem] desktop:[&:nth-of-type(3)]:top-[5.4375rem]`}
    >
      <div className="absolute -top-11 bg-primary-2 rounded-full w-[5.5rem] h-[5.5rem] grid place-items-center desktop:left-8">
        <img src={svgIcon} alt={`${heading} icon`} />
      </div>
      <h3 className="text-mobile-h3 text-neutral-3">{heading}</h3>
      <p className="mt-4 text-mobile-p-sm text-neutral-2">{desc}</p>
    </section>
  );
};

export default FeatureList;

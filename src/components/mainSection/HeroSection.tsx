import HeroImg from "/images/illustration-working.svg";

const HeroSection = () => {
  return (
    <div
      className="child-grid pb-[10.5rem] 
      desktop:col-start-2 desktop:col-end-[-1] desktop:flex desktop:items-center desktop:gap-x-[6.4375rem] desktop:overflow-hidden desktop:pb-[9.5rem]"
    >
      <img
        src={HeroImg}
        alt="working illustration"
        className="col-start-2 col-end-[-1] h-[20.5rem] object-cover object-left 
        tablet:content tablet:justify-self-center 
        desktop:order-1 desktop:h-[30.125rem]"
      />

      <section
        className="content mt-10 
        desktop:mt-0 desktop:text-start desktop:min-w-[35rem] desktop:max-w-[38rem]"
      >
        <h1 className="text-mobile-h1 text-neutral-3 desktop:text-desktop-h1">
          More than just shorter links
        </h1>
        <p className="text-neutral-2 mt-3 desktop:mt-0 desktop:text-[1.375rem] desktop:leading-9">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          type="button"
          className="cta-btn justify-self-center mt-[1.875rem] px-10 py-[0.8125rem] rounded-full tracking-wider desktop:mt-[2.125rem]"
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default HeroSection;

import HeroImg from "../../assets/images/illustration-working.svg";

const HeroSection = () => {
  return (
    <section className="child-grid text-center">
      <img
        src={HeroImg}
        alt="working illustration"
        className="col-start-2 col-span-full h-[20.5rem] object-cover object-left"
      />
      <h1 className="content mt-10 text-mobile-h1 text-neutral-3">
        More than just shorter links
      </h1>
      <p className="content text-neutral-2 mt-3">
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <button
        type="button"
        className="content justify-self-center mt-[1.875rem] px-10 py-[13px] rounded-full bg-primary-1 text-white font-bold tracking-wider"
      >
        Get Started
      </button>

      {/* TODO: bg-shorten-link (background-image) not working for some reason*/}
      <div className="mt-2 relative top-20 h-40 content bg-primary-2 bg-shorten-link px-6 py-6 rounded-xl grid gap-y-4">
        <input
          type="url"
          placeholder="Shorten a link here..."
          className="rounded-md px-4 text-default"
        />
        <button type="button" className="cta-btn rounded-md font-bold">
          Shorten It!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

type NavbarType = {
  showOnMobile: boolean;
};

const Navbar = ({ showOnMobile }: NavbarType) => {
  const hiddenClassname = !showOnMobile ? "hidden" : "";

  return (
    <nav
      className={`${hiddenClassname} absolute top-14 w-full rounded-[10px] bg-primary-2 text-white font-bold px-6 pt-[1.875rem] pb-10 
      tablet:relative tablet:-top-[0.125rem] tablet:ml-[2.8125rem] tablet:p-0 tablet:flex tablet:justify-between tablet:bg-transparent tablet:text-[0.9375rem] tablet:text-neutral-2`}
    >
      <ul className="grid gap-y-2 tablet:flex tablet:gap-x-[1.875rem]">
        <li>
          <a href="">
            <p className="py-[0.5625rem] hover:text-neutral-4 transition-colors duration-200">
              Features
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p className="py-[0.5625rem] hover:text-neutral-4 transition-colors duration-200">
              Pricing
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p className="py-[0.5625rem] hover:text-neutral-4 transition-colors duration-200">
              Resources
            </p>
          </a>
        </li>
      </ul>

      <div className="my-5 h-[1px] bg-zinc-600 tablet:hidden"></div>

      <ul className="grid gap-y-4 tablet:flex tablet:items-center tablet:gap-x-9">
        <li>
          <a href="">
            <p className="py-[0.5625rem] hover:text-neutral-4 transition-colors duration-200">
              Login
            </p>
          </a>
        </li>
        <li>
          <a href="">
            <p className="cta-btn py-[0.5625rem] rounded-full tablet:px-6 tablet:py-[0.3125rem]">
              Sign Up
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

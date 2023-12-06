type NavbarType = {
  showOnMobile: boolean;
};

const Navbar = ({ showOnMobile }: NavbarType) => {
  const hiddenClassname = !showOnMobile ? "hidden" : "";

  return (
    <nav
      className={`${hiddenClassname} absolute top-14 w-full rounded-[10px] bg-primary-2 text-white font-bold px-6 pt-[1.875rem] pb-10 
      desktop:relative desktop:-top-[0.125rem] desktop:ml-[2.8125rem] desktop:p-0 desktop:flex desktop:justify-between desktop:bg-transparent desktop:text-[0.9375rem] desktop:text-neutral-2`}
    >
      <ul className="grid gap-y-2 desktop:flex desktop:gap-x-[1.875rem]">
        <li>
          <a href="">
            <p className="py-[0.5625rem]">Features</p>
          </a>
        </li>
        <li>
          <a href="">
            <p className="py-[0.5625rem]">Pricing</p>
          </a>
        </li>
        <li>
          <a href="">
            <p className="py-[0.5625rem]">Resources</p>
          </a>
        </li>
      </ul>

      <div className="my-5 h-[1px] bg-zinc-600 desktop:hidden"></div>

      <ul className="grid gap-y-4 desktop:flex desktop:items-center desktop:gap-x-9">
        <li>
          <a href="">
            <p className="py-[0.5625rem]">Login</p>
          </a>
        </li>
        <li>
          <a href="">
            <p className="cta-btn py-[0.5625rem] rounded-full desktop:px-6 desktop:py-[0.3125rem]">
              Sign Up
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

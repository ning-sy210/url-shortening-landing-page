type NavbarType = {
  showOnMobile: boolean;
};

const Navbar = ({ showOnMobile }: NavbarType) => {
  const hiddenClassname = !showOnMobile ? "hidden" : "";

  return (
    <nav
      className={`${hiddenClassname} absolute top-14 w-full rounded-[10px] bg-primary-2 text-white font-bold px-6 pt-[1.875rem] pb-10`}
    >
      <ul className="grid gap-y-2">
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

      <div className="my-5 h-[1px] bg-zinc-600"></div>

      <ul className="grid gap-y-4">
        <li>
          <a href="">
            <p className="py-[0.5625rem]">Login</p>
          </a>
        </li>
        <li>
          <a href="">
            <p className="cta-btn py-[0.5625rem] rounded-full">Sign Up</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

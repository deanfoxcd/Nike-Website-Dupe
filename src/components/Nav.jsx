import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";

function Nav() {
  return (
    <header className="padding-x absolute z-10 w-full py-8">
      <nav className="flex items-center justify-between">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
      </nav>
    </header>
  );
}

export default Nav;

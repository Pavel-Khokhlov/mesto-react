import logo from "../../images/logo.svg";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="логотип место россия" className="header__logo" />
    </header>
  );
}

export default Header;

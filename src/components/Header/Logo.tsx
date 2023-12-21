import { Link } from "react-router-dom";
import "./style/Header.scss";

const url = "/src/assets/logo.svg"

export const Logo = () => {
  return (
    <div className="header__logo-wrap">
      <Link className="header__logo-link" to="/">
        <img className="header__logo" src={url} />
      </Link>
    </div>
  );
};
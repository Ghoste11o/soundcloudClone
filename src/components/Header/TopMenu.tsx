import { Link } from "react-router-dom";

export const TopMenu = () => {
  return (
    <ul className="header__topmenu">
      <li className="header__topmenu-item">
        <Link className="header__topmenu-link" to="/home">Home</Link>
      </li>
      <li className="header__topmenu-item">
        <Link className="header__topmenu-link" to="/about">About</Link>
      </li>
      <li className="header__topmenu-item">
        <Link className="header__topmenu-link" to="/library">Library</Link>
      </li>
    </ul>
  );
}; 
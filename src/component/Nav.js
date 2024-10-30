import { NavLink } from "react-router-dom";

function Nav({ close, navName, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      onClick={close}
    >
      {navName}
    </NavLink>
  );
}

export default Nav;

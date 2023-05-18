/** @format */

import { NavLink, Outlet } from "react-router-dom";
import NavList from "./NavList";

const NavItems = () => {
  return (
    <div className="nav-link">
      {NavList?.map((nav) => {
        return (
          <NavLink
            key={nav?.path}
            to={nav?.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {nav?.path}
          </NavLink>
        );
      })}
      <Outlet />
    </div>
  );
};
export default NavItems;

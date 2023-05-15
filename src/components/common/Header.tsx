/** @format */
import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../../const";

const Header = () => {
  const { HOME, COURSE, TEACHER, STUDENT } = ROUTES;
  return (
    <header>
      <NavLink to="/">{HOME}</NavLink>
      <NavLink to={COURSE} style={{ textTransform: "capitalize" }}>
        {COURSE}
      </NavLink>
      <NavLink to={TEACHER} style={{ textTransform: "capitalize" }}>
        {TEACHER}
      </NavLink>
      <NavLink to={STUDENT} style={{ textTransform: "capitalize" }}>
        {STUDENT}
      </NavLink>
      <Outlet />
    </header>
  );
};

export default Header;

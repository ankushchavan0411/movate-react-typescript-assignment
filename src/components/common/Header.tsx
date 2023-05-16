/** @format */
import Typography from "@mui/material/Typography";
import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../../const";

const Header = () => {
  const { HOME, COURSE, TEACHER, STUDENT } = ROUTES;
  return (
    <header>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1 }}
        className="logo"
      >
        Myapp
      </Typography>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        {HOME}
      </NavLink>
      <NavLink
        to={COURSE}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {COURSE}
      </NavLink>
      <NavLink
        to={TEACHER}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {TEACHER}
      </NavLink>
      <NavLink
        to={STUDENT}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {STUDENT}
      </NavLink>
      <Outlet />
    </header>
  );
};

export default Header;

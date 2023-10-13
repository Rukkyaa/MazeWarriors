import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <NavLink replace to="/">
        Home
      </NavLink>
      <NavLink replace to="/login">
        Login
      </NavLink>
    </>
  );
};

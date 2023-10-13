import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex px-[5rem] bg-brown-700">
      <div className="w-full flex justify-around gap-[2rem] py-[1.5rem]">
        <NavbarItem to="/">Home</NavbarItem>
        <NavbarItem to="/login">Login</NavbarItem>
      </div>
    </div>
  );
};

interface NavbarItemProps {
  to: string;
  children: React.ReactNode;
}

const NavbarItem = ({ to, children }: NavbarItemProps) => {
  return (
    <NavLink
      replace
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        clsx("text-[1.5rem]", {
          "text-white font-semibold": isActive,
          "text-brown-900": !isActive,
        })
      }
    >
      {children}
    </NavLink>
  );
};

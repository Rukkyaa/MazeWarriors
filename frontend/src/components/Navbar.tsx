import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  isAuth: boolean | undefined;
  logout: () => void;
}

export function Navbar({ isAuth, logout }: NavbarProps) {
  return (
    <div className="flex px-[5rem] bg-brown-700">
      <div className="w-full flex justify-around gap-[2rem] py-[1.5rem]">
        <NavbarItem to="/">Home</NavbarItem>
        {!isAuth ? (
          <NavbarItem to="/login">Login</NavbarItem>
        ) : (
          <>
            <NavbarItem to="/profile">Profile</NavbarItem>
            <a
              onClick={() => logout()}
              className={clsx(
                "text-[1.5rem] text-brown-900 hover:cursor-pointer hover:text-white"
              )}
            >
              Logout
            </a>
          </>
        )}
      </div>
    </div>
  );
}

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

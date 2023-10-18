import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

interface RoutingProps {
  isAuth: boolean | undefined;
  isLoading: boolean;
  refetch: () => void;
}

export default function Routing({ isAuth, isLoading, refetch }: RoutingProps) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          !isAuth ? (
            <Login refetch={refetch} />
          ) : (
            <Navigate replace to={"/profile"} />
          )
        }
      />
      <Route
        path="/profile"
        element={
          isAuth || isLoading ? (
            <Profile isLoading={isLoading} />
          ) : (
            <Navigate replace to={"/login"} />
          )
        }
      />
    </Routes>
  );
}

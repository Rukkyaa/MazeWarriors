import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { initZod } from "./utils/zod";
import Routing from "./Routing";
import useAuthenticated from "./hooks/useAuthenticated";
import useLogout from "./hooks/useLogout";

initZod();

function App() {
  const { data: isAuth, isLoading, refetch } = useAuthenticated();
  const { logout } = useLogout({ refetch });
  return (
    <>
      <Navbar isAuth={isAuth} logout={logout} />
      <Routing isAuth={isAuth} isLoading={isLoading} refetch={refetch} />
      <Outlet />
    </>
  );
}

export default App;

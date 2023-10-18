import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { initZod } from "./utils/zod";
import Routing from "./Routing";
import useAuthenticated from "./hooks/useAuthenticated";

initZod();

function App() {
  const { data: isAuth, isLoading, refetch } = useAuthenticated();
  return (
    <>
      <Navbar isAuth={isAuth} />
      <Routing isAuth={isAuth} isLoading={isLoading} refetch={refetch} />
      <Outlet />
    </>
  );
}

export default App;

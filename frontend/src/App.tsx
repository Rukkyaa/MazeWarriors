import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { initZod } from "./utils/zod";

initZod();

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

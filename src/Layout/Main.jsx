import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import Notification from "../Components/Notification";

const Main = () => {
  return (
    <div>
      <Notification />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="text-3xl text-blue-600">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
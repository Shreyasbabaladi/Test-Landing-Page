import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <div className="h-5 ">
        <div className="container"> 
        <p className="text-center pt-5 pb-5">This is assessment for an company</p>
        </div>
      </div>
    </>
  );
};

export default Layout;

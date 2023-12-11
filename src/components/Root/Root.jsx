import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#eceefa] to-[#e2ddf1]">
        <div className="max-w-6xl mx-auto">
          <Header></Header>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;

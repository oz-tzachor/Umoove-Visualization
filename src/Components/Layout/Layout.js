import { useContext, useState } from "react";
import { dataContext } from "../../context/manageContext";
import Controls from "../Controls/Controls";
import LoadData from "../LoadData/LoadData";
import LogReader from "../LogReader/LogReader";
import Sandbox from "../SandBox/SandBox";
import "./Layout.css";
const Layout = () => {
  const data = useContext(dataContext);
  return (
    <div className="mainLayout">
      {/* <LogReader/> */}
      {!data.userLoaded && <LoadData />}
      {data.userLoaded && <Sandbox />}
    </div>
  );
};
export default Layout;

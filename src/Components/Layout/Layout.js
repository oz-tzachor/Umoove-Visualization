import { useContext, useState } from "react";
import { dataContext } from "../../context/manageContext";
import ChooseAction, {
  Analyze,
  Visualization,
} from "../ChooseAction/ChooseAction";
import Controls from "../Controls/Controls";
import LoadData from "../LoadData/LoadData";
import LogReader from "../LogReader/LogReader";
import Sandbox from "../SandBox/SandBox";
import "./Layout.css";
const Layout = () => {
  const data = useContext(dataContext);
  return (
    <div className="mainLayout">
      {data.selectedMethod === "choose" && <ChooseAction />}
      {data.selectedMethod === "visualization" && <Visualization />}
      {data.selectedMethod === "analyze" && <Analyze />}
    </div>
  );
};
export default Layout;

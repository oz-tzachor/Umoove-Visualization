import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { DataProvider } from "./context/manageContext";

function App() {
  return (
    <>
      <DataProvider>
        <Layout />
      </DataProvider>
    </>
  );
}

export default App;

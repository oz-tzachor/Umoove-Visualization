import { createContext, useContext, useState } from "react";

export const dataContext = createContext();
export const apiContext = createContext();

//---נא לקבל שינויים של קונטקטס לpopup
export const popupContext = createContext();
export const DataProvider = ({ children }) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [data, setData] = useState(false);
  const [cmMode, setCmMode] = useState(true);

  // function updateUserDetails(updatedUserDetails) {
  //   setUserDetails(updatedUserDetails);
  //   setUpdate(!update);
  // }
  let setMode = () => {
    setCmMode(!cmMode);
  };
  return (
    <dataContext.Provider
      value={{ data, setData, userLoaded, setUserLoaded, setMode, cmMode }}
    >
      {children}
    </dataContext.Provider>
  );
};

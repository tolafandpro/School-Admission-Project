import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { olashoreUserData } from "../pages/olashore-users/OlashoreUserData";

export const OlashoreUserContext = createContext();

export const OlashoreUserContextProvider = (props) => {
  const [data, setData] = useState(olashoreUserData);
  
  return <OlashoreUserContext.Provider value={{ contextData: [data, setData] }}> <Outlet /> </OlashoreUserContext.Provider>
};

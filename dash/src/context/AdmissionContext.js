import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { olashoreUserData } from "../pages/olashore-users/OlashoreUserData";

export const AdmissionContext = createContext({});

export const AdmissionContextProvider = (props) => {
  const [data, setData] = useState(olashoreUserData);
  return <AdmissionContext.Provider value={{ contextData: [data, setData] }}> <Outlet /> </AdmissionContext.Provider>
};

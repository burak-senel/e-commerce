import { createContext, useContext } from "react";
import * as data from "../data"; // footerData'yı doğrudan içeri aktarın
const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  return <DataContext.Provider value={data}>{children} </DataContext.Provider>;
};
export const useData = () => useContext(DataContext);

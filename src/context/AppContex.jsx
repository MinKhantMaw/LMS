import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const value = {
        
    }
  return <AppContext.Provider value={}>{props.chidren}</AppContext.Provider>;
};

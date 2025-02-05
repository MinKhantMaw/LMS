// import { createContext } from "react";

// export const AppContext = createContext();

// export const AppProvider = (props) => {
//   const value = {};
//   return (
//     <AppContext.Provider value={}>{props.chidren}</AppContext.Provider>
//   );
// };

import { createContext, useContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Context Provider component
export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState("Hello from Context");

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

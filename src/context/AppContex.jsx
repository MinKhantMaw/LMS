import { createContext, useContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

// Create the context
const AppContext = createContext();

// Context Provider component
export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState("Hello from Context");
  const [allCourses, setAllCourses] = useState([]);

  const fetchAllCourse = async () => {
    setAllCourses(dummyCourses);
  };

  useEffect(() => {
    fetchAllCourse();
  }, []);

  const value = {
    state,
    setState,
    allCourses,
    setAllCourses,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
// export const useAppContext = () => useContext(AppContext);
export { AppContext };

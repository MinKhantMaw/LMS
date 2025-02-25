import { createContext, useContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { setErrorThrowerOptions } from "@clerk/clerk-react/internal";

// Create the context
const AppContext = createContext();

// Context Provider component
export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState("Hello from Context");
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const navigate = useNavigate();

  const fetchAllCourse = async () => {
    setAllCourses(dummyCourses);
  };

  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  useEffect(() => {
    fetchAllCourse();
  }, []);

  const value = {
    state,
    setState,
    allCourses,
    setAllCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
// export const useAppContext = () => useContext(AppContext);
export { AppContext };

import { useContext, React } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { AppContext } from "../../context/AppContex";

const CourseSection = () => {
  const { allCourses } = useContext(AppContext);
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn From The best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni,
        dolor expedita veritatis adipisci, ducimus exercitationem animi.
      </p>
      <div>
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Link
        to={"/course-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/20 rounded px-10 py-3 "
      >
        Show All Course
      </Link>
    </div>
  );
};

export default CourseSection;

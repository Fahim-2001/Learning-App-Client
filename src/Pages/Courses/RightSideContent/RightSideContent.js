import React from "react";
import { Link } from "react-router-dom";

const RightSideContent = ({ allCourses }) => {
  console.log(allCourses);
  return (
    <div>
      <h1 className="text-2xl font-medium">
        Here we have {allCourses.length} courses.
      </h1>
      <div className="grid grid-cols-1 my-2">
        {allCourses.map((course) => (
          <Link
            className=" py-2 rounded-md hover:bg-slate-400"
            to={`/courses/${course.id}`}
            key={course.id}
          >
            {course.course_name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RightSideContent;

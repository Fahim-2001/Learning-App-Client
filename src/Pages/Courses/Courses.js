import React, { useContext } from "react";
import Course from "./Course/Course";
import RightSideContent from "./RightSideContent/RightSideContent";
import "./courses.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Courses = () => {
  const allCourses = useLoaderData();
  // console.log(allCourses);

  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="courses-container">
      <div className="grid sm:grid-cols-3 ">
        {allCourses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
      <RightSideContent allCourses={allCourses}></RightSideContent>
    </div>
  );
};

export default Courses;

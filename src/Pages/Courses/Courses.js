import React from "react";
import Course from "./Course/Course";
import RightSideContent from "./RightSideContent/RightSideContent";
import "./courses.css";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  return (
    <div className="courses-container">
      <div className="grid sm:grid-cols-3 "></div>
      <RightSideContent></RightSideContent>
    </div>
  );
};

export default Courses;

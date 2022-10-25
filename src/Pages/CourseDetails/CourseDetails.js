import React from "react";
import { useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const navigate = useNavigate();
  const goToCourses = () => {
    navigate("/courses");
  };
  return (
    <div>
      <h2>CourseDetails</h2>
      <button onClick={goToCourses} className="btn">
        Go to courses
      </button>
    </div>
  );
};

export default CourseDetails;

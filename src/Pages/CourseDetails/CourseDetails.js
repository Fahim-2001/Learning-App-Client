import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const detail = useLoaderData();
  console.log(detail);
  const { id, course_name, details, image } = detail;

  const navigate = useNavigate();
  const goToCourses = () => {
    navigate("/courses");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold my-5">{course_name}</h1>
      </div>
      <div className="flex justify-center">
        <img src={image} alt="" />
      </div>
      <div className="px-20 py-5">
        <p>{details}</p>
      </div>
      <div className="flex justify-around">
        <Link
          to={`/checkout/${id}`}
          className="text-white font-semibold  bg-gray-800 px-4 py-2 mt-2 rounded-lg"
        >
          Get Premium Access
        </Link>
      </div>
      <button
        onClick={goToCourses}
        className="text-white font-semibold  bg-gray-800 px-4 py-2 mt-2 rounded-lg"
      >
        Go To Courses
      </button>
    </div>
  );
};

export default CourseDetails;

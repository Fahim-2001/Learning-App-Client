import React from "react";

const Course = ({ course }) => {
  const { course_name, image, course_duration } = course;
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">{course_name}</h2>
      </div>
      <p className="dark:text-gray-100">Course Duration: {course_duration}</p>
      <button className="text-white font-medium w-full bg-gray-600 hover:bg-gray-800 px-4 py-2 mt-2 rounded-lg">
        See Details
      </button>
    </div>
  );
};

export default Course;

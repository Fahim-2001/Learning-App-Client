import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  const { course_name } = course;
  return (
    <div>
      <h1 className="text-3xl font-bold">{course_name}</h1>
    </div>
  );
};

export default CheckOut;

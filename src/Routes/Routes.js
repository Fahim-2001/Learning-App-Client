import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/404Error/Error";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";

import Login from "../Pages/Login/Login";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () => fetch("https://y-fahim-2001.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:courseID",
        loader: async ({ params }) =>
          fetch(`https://y-five-ebon.vercel.app/courses/${params.courseID}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/checkout/:courseID",
        loader: async ({ params }) =>
          fetch(`https://y-five-ebon.vercel.app/courses/${params.courseID}`),
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

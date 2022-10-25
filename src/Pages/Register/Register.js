import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";

const Register = () => {
  return (
    <div class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 class="text-2xl font-semibold text-black capitalize dark:text-white">
        Register
      </h2>

      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 ">
          <div>
            <label class="text-black dark:text-gray-200" for="username">
              Fullname
            </label>
            <input
              id="username"
              name="name"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label class="text-black dark:text-gray-200" for="username">
              PhotoURL
            </label>
            <input
              id="username"
              name="photoURL"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Enter your photo URL"
            />
          </div>

          <div>
            <label class="text-black dark:text-gray-200" for="emailAddress">
              Email Address
            </label>
            <input
              id="emailAddress"
              name="email"
              type="email"
              class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label class="text-black dark:text-gray-200" for="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label
              class="text-black dark:text-gray-200"
              for="passwordConfirmation"
            >
              Password Confirmation
            </label>
            <input
              id="passwordConfirmation"
              name="confirmedPassword"
              type="password"
              class="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Confirm your password"
            />
          </div>
        </div>

        <div class="flex justify-between mt-6">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-800">
              Login
            </Link>
          </p>
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

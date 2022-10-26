import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  // Error State
  const [error, setError] = useState(null);

  // Contexts
  const { createUser, verifyEmail } = useContext(AuthContext);

  //Create User
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullname = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmedPassword = form.confirmedPassword.value;

    // Password Confirming
    if (password !== confirmedPassword) {
      return setError("Password doesnt match!");
    }
    console.log(fullname, photoURL, email, password, confirmedPassword);

    // Creating User
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        console.log(user);
        verifyEmail();
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-semibold text-black capitalize dark:text-white">
        Register
      </h2>

      <form onSubmit={handleRegister}>
        <div className="grid grid-cols-1 gap-6 mt-4 ">
          <div>
            <label className="text-black dark:text-gray-200" htmlFor="username">
              Fullname
            </label>
            <input
              id="username"
              name="name"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="text-black dark:text-gray-200" htmlFor="username">
              PhotoURL
            </label>
            <input
              id="username"
              name="photoURL"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Enter your photo URL"
            />
          </div>

          <div>
            <label
              className="text-black dark:text-gray-200"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              id="emailAddress"
              name="email"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="text-black dark:text-gray-200" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label
              className="text-black dark:text-gray-200"
              htmlFor="passwordConfirmation"
            >
              Password Confirmation
            </label>
            <input
              id="passwordConfirmation"
              name="confirmedPassword"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="Confirm your password"
            />
          </div>
        </div>
        <p className="text-red-800">{error}</p>
        <div className="flex justify-between mt-6">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-800">
              Login
            </Link>
          </p>
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    let { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginValue),
      };
      const res = await fetch(`https://httpbin.org/post`, config);
      if (res.ok) {
        toast.success("Login SuccessFully!");
      } else {
        toast.error("Invalid Login", res.statusText);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to Connect");
    }
  };

  return (
    <>
      <div className="font-poppins max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Login</h2>
        <span>Please Enter your Valid Credentials</span>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your valid email"
              className="mt-1 px-4 py-3 text-sm border border-gray-300 rounded-sm w-full outline-none focus:ring-orange-500 focus:border-orange-600"
              value={loginValue.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 px-4 py-3 border text-sm border-gray-300 rounded-md w-full outline-none focus:ring-orange-500 focus:border-orange-500"
              value={loginValue.password}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="py-3 w-full px-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none"
            >
              Login
            </button>
          </div>
          <span className="my-2 flex justify-center text-center items-center gap-2">
            Don't have an account?
            <Link to="/" className="text-decoration-none">
              register
            </Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;

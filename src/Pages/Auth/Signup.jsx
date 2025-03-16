import React from "react";
// import { Link } from "react-router-dom";
import { logo } from "../../Assets/Images/images";

const Signup = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-start p-10 gap-6">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <div className="text-4xl font-extrabold">Welcome to</div>
        <div className="text-4xl font-extrabold">Sales Management!</div>
        <p className="mt-4 max-w-md">
          Organize your sales, customers, and inventory effortlessly. Sign up
          today and experience a smarter way to manage your business operations!
        </p>
        <p className="absolute bottom-5 text-sm">
          &copy;2025 CopyrightSalesManagement.
        </p>
      </div>
      {/* Right Side */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <img src={logo} alt="Logo" className="w-12 h-12 mb-4" />
        <h2 className="text-4xl font-semibold text-gray-500">
          Sales Management System
        </h2>
        <h3 className="text-xl font-semibold text-blue-600 mt-6">Sign In</h3>

        <form className="w-full max-w-sm mt-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="text-right text-sm text-blue-500 cursor-pointer mb-3">
            Forgot your password?
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          You do not have an account yet?{" "}
          {/* <Link to="/signup" className="text-blue-600 font-semibold">
            Sign Up
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default Signup;

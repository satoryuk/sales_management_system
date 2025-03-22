import React from "react";
import { logo } from "../../Assets/Images/images";

const ConfirmSignUp = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-start px-20 py-10 relative">
        <div className="flex flex-col justify-center items-start text-left w-full">
          <img src={logo} alt="Logo" className="w-16 h-16 mb-4" />
          <h1 className="text-4xl font-bold mb-4">Welcome to</h1>
          <h1 className="text-4xl font-bold mb-4">Sales Management!</h1>
          <p className="max-w-md mb-16">
            Organize your sales, customers, and inventory effortlessly. Sign up
            today and experience a smarter way to manage your business
            operations!
          </p>
        </div>
        <p className="absolute bottom-5 left-20 text-sm">
          &copy;2025 CopyrightSalesManagement.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-20 py-10">
        <div className="flex flex-col justify-center items-center text-left w-full">
          <div className="flex items-start gap-3 mb-6">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Sales Management System
            </h2>
          </div>

          <h3 className="text-2xl font-bold text-blue-600 mb-4">Sign In</h3>

          <form className="w-full max-w-xs">
            <input
              type="text"
              placeholder="6-digit code"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-gray-600 text-sm">
            Didn't receive the code yet?{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ConfirmSignUp;

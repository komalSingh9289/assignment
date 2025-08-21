import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-80 bg-gray-100 shadow-md rounded-lg p-6">
        <h2 className="text-lg font-bold">Welcome to PopX</h2>
        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mt-6 space-y-3 flex flex-col">
          <Link to="/signup">
            <button className="w-full bg-purple-600 cursor-pointer text-white py-2 rounded-md hover:bg-purple-700">
              Create Account
            </button>
          </Link>
          <Link to="/signin">
            <button className="w-full bg-purple-100 hover:bg-purple-200 cursor-pointer  text-purple-600 py-2 rounded-md border border-purple-600">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

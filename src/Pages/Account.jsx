import React, { useEffect, useState } from "react";

export default function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p>No user found. Please login first.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white h-screen">
      <div className="w-[300px] h-[90%] bg-gray-50 shadow-md border border-gray-300 overflow-hidden ">
        
        {/* Navbar / Header */}
        <div className="shadow-sm px-4 py-3 bg-white">
          <h2 className="text-sm font-medium text-gray-700">
            Account Settings
          </h2>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4 px-4 py-4">
          <img
            src="./profile.jpg"
            alt="profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{user.fullName}</h3>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Description */}
        <div className="px-4 py-4 text-sm text-gray-600 leading-relaxed border-b-2 border-dashed border-gray-200">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam.
        </div>
      </div>
    </div>
  );
}
